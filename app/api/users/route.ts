import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Small helper types to satisfy TypeScript about included relations
type GameTx = { amount?: any; type?: string | null };
type UserWithTx = Record<string, any> & { game_transactions?: GameTx[] };

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "50");
    const phone = searchParams.get("phone");

    const skip = (page - 1) * limit;

    const whereClause: any = {};
    if (phone) {
      // allow partial search
      whereClause.phone_number = { contains: phone };
    }

    // fetch users including their game transactions
    const result = await Promise.all([
      prisma.user.findMany({
        where: whereClause,
        skip,
        take: limit,
        include: {
          game_transactions: {
            select: {
              amount: true,
              type: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.user.count({
        where: whereClause,
      }),
    ]);
    const usersRaw = result[0] as UserWithTx[];
    const total = result[1] as number;

    // compute totals per user
    const users = usersRaw.map((u) => {
      const txs = u.game_transactions || u.game_transactions || [];
      const total_bet = txs
        .filter((t) => String(t.type).toUpperCase() === "BET")
        .reduce((acc, t) => acc + Number(t.amount || 0), 0);
      const total_win = txs
        .filter((t) => String(t.type).toUpperCase() === "WIN")
        .reduce((acc, t) => acc + Number(t.amount || 0), 0);

      // strip relation arrays and convert Decimal/Date fields to serializable types
      const { game_transactions, ...rest } = u as any;

      return {
        ...rest,
        balance: Number((u as any).balance ?? 0),
        turn_over: Number((u as any).turn_over ?? 0),
        createdAt:
          (u as any).createdAt instanceof Date
            ? (u as any).createdAt.toISOString()
            : String((u as any).createdAt),
        total_bet,
        total_win,
      };
    });

    return NextResponse.json(
      {
        users,
        total,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
