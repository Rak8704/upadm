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
      data: { status: "completed" },
    });

    if (updatedTransaction.type === "deposit") {
      await prisma.user.update({
        where: { id: updatedTransaction.user_id },
        data: {
          balance: { increment: Number(updatedTransaction.amount) },
          turn_over: { increment: Number(updatedTransaction.amount) },
        },
      });
    }

    return NextResponse.json(
      { message: "Transaction marked as completed" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error completing transaction:", error);
    return NextResponse.json(
      { error: "Failed to complete transaction" },
      { status: 500 }
    );
  }
}
