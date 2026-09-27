import { NextResponse } from "next/server";

export async function GET() {
  try {
    const affiliates = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      { id: 3, name: "Mike Johnson" },
    ];

    return NextResponse.json({
      success: true,
      data: affiliates,
    });
  } catch (error) {
    console.error("Error fetching affiliates list:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}