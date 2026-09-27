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
      where: {
        id: parseInt(userId),
      },
      data: {
        status: "Suspended",
      },
    });

    return NextResponse.json(
      { message: "User suspended successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error suspending user:", error);
    return NextResponse.json(
      { error: "Failed to suspend user" },
      { status: 500 }
    );
  }
}
