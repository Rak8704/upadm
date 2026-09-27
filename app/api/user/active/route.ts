import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { userId } = await request.json();

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    await prisma.user.update({
      where: { id: parseInt(userId) },
      data: { status: "Active" },
    });

    return NextResponse.json(
      { message: "User activated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error activating user:", error);
    return NextResponse.json(
      { error: "Failed to activate user" },
      { status: 500 }
    );
  }
}
