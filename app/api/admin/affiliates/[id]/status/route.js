import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    const { status } = body;

    // এখানে ডাটাবেস আপডেট করুন
    console.log(`Updating affiliate ${id} status to ${status}`);

    return NextResponse.json({
      success: true,
      message: "Status updated successfully",
      data: { id, status },
    });
  } catch (error) {
    console.error("Error updating status:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}