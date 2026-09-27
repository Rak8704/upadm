import { NextResponse } from 'next/server';

// Mock data
const mockMessages = [
  {
    id: 1,
    user_id: 101,
    user_name: "John Doe",
    user_email: "john@example.com",
    subject: "Account Issue",
    message: "I cannot login to my account. Please help me reset my password.",
    status: "pending",
    created_at: "2024-03-15T10:00:00Z",
  },
  {
    id: 2,
    user_id: 102,
    user_name: "Jane Smith",
    user_email: "jane@example.com",
    subject: "Payment Problem",
    message: "I made a payment but the amount is not reflecting in my wallet.",
    status: "replied",
    created_at: "2024-03-14T15:30:00Z",
    admin_reply: "We are investigating this issue. Please allow 24 hours.",
    replied_at: "2024-03-14T16:00:00Z",
  },
  {
    id: 3,
    user_id: 103,
    user_name: "Mike Johnson",
    user_email: "mike@example.com",
    subject: "Feature Request",
    message: "Can you add dark mode to the dashboard?",
    status: "resolved",
    created_at: "2024-03-13T09:15:00Z",
    admin_reply: "Thank you for your suggestion. We will consider it.",
    replied_at: "2024-03-13T10:00:00Z",
  },
];

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: mockMessages,
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}