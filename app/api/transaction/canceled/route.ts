import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { transactionId } = await request.json();
    if (!transactionId) {
      return NextResponse.json(
        { error: "Transaction ID is required" },
        { status: 400 }
      );
    }

    const updatedTransaction = await prisma.transaction.update({
      where: { id: parseInt(transactionId) },
      data: { status: "cancelled" },
    });

    if (updatedTransaction.type === "withdraw") {
      await prisma.user.update({
        where: { id: updatedTransaction.user_id },
        data: {
          balance: { increment: Number(updatedTransaction.amount) },
        },
      });
    }

    return NextResponse.json(
      { message: "Transaction marked as cancelled" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error cancelling transaction:", error);
    return NextResponse.json(
      { error: "Failed to cancel transaction" },
      { status: 500 }
    );
  }
}
