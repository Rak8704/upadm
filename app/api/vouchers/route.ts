import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";

export async function GET(request: Request) {
  try {
    const vouchers = await prisma.voucher.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: { id: true, phone_number: true },
        },
      },
    });

    // serialize Decimal/Date values
    const data = vouchers.map((v) => ({
      id: v.id,
      code: v.code,
      amount: Number((v as any).amount ?? 0),
      message: (v as any).message ?? null,
      collected: v.collected,
      collected_at: v.collected_at ? v.collected_at.toISOString() : null,
      collected_by: v.collected_by,
      user: v.user
        ? { id: v.user.id, phone_number: v.user.phone_number }
        : null,
      createdAt: v.createdAt.toISOString(),
    }));

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "Failed to fetch vouchers" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone, amount, message } = body;

    if (!amount || isNaN(Number(amount))) {
      return NextResponse.json(
        { success: false, message: "Invalid amount" },
        { status: 400 }
      );
    }

    const code = uuidv4();

    let collected_by: number | null = null;
    let collected = false;
    let collected_at = null as Date | null;

    if (phone) {
      const user = await prisma.user.findUnique({
        where: { phone_number: String(phone) },
      });
      if (user) {
        collected_by = user.id;
        collected = true;
        collected_at = new Date();
      }
    }

    // create voucher with amount and optional message
    const voucher = await prisma.voucher.create({
      // cast data as any to avoid generated Prisma typing mismatch if client wasn't regenerated
      data: {
        code,
        // prisma Decimal fields can accept JS numbers, but cast to any to satisfy TS if needed
        amount: Number(amount) as any,
        message: message ?? null,
        collected,
        collected_at: collected_at ?? null,
        collected_by: collected_by ?? null,
      } as any,
    });

    return NextResponse.json({
      success: true,
      code,
      message: (voucher as any).message ?? null,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "Failed to create voucher" },
      { status: 500 }
    );
  }
}
