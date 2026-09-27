import { NextResponse } from 'next/server';

export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    const { status } = body;

    // Validate status
    const validStatuses = ['pending', 'replied', 'resolved'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, message: "Invalid status" },
        { status: 400 }
      );
    }

    console.log(`Updating message ${id} status to ${status}`);
    
    // এখানে ডাটাবেস আপডেট করুন
    // await db.query("UPDATE support_messages SET status = $1 WHERE id = $2", [status, id]);

    return NextResponse.json({
      success: true,
      message: "Status updated successfully",
      data: { id: parseInt(id), status, updated_at: new Date().toISOString() },
    });
  } catch (error) {
    console.error("Error updating status:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}