import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { message_id, reply } = body;

    // Validate input
    if (!message_id || !reply || reply.trim() === "") {
      return NextResponse.json(
        { success: false, message: "Message ID and reply are required" },
        { status: 400 }
      );
    }

    console.log(`Replying to message ${message_id}: ${reply}`);
    
    // এখানে ডাটাবেসে reply সেভ করুন এবং status আপডেট করুন
    // await db.query(`
    //   UPDATE support_messages 
    //   SET status = 'replied', 
    //       admin_reply = $1, 
    //       replied_at = NOW() 
    //   WHERE id = $2
    // `, [reply, message_id]);

    // এখানে ইমেইল নোটিফিকেশন পাঠাতে পারেন
    // await sendEmailNotification(userEmail, subject, reply);

    return NextResponse.json({
      success: true,
      message: "Reply sent successfully",
      data: {
        message_id,
        reply,
        replied_at: new Date().toISOString(),
        status: "replied",
      },
    });
  } catch (error) {
    console.error("Error sending reply:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}