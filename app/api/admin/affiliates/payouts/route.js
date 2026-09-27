import { NextResponse } from "next/server";

const mockPayouts = [
  {
    id: 1,
    affiliate_id: 1,
    affiliate_name: "John Doe",
    amount: 500.00,
    status: "completed",
    payment_method: "Bank Transfer",
    payment_details: "Bank: ABC, Account: 123456",
    created_at: "2024-02-15T10:00:00Z",
    processed_at: "2024-02-16T10:00:00Z",
  },
  {
    id: 2,
    affiliate_id: 2,
    affiliate_name: "Jane Smith",
    amount: 250.00,
    status: "pending",
    payment_method: "PayPal",
    payment_details: "paypal@example.com",
    created_at: "2024-03-10T10:00:00Z",
    processed_at: null,
  },
];

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: mockPayouts,
    });
  } catch (error) {
    console.error("Error fetching payouts:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { affiliate_id, amount } = body;

    const newPayout = {
      id: mockPayouts.length + 1,
      affiliate_id,
      affiliate_name: "New Affiliate",
      amount,
      status: "pending",
      payment_method: "Bank Transfer",
      payment_details: "Pending",
      created_at: new Date().toISOString(),
      processed_at: null,
    };

    mockPayouts.push(newPayout);

    return NextResponse.json({
      success: true,
      message: "Payout created successfully",
      data: newPayout,
    });
  } catch (error) {
    console.error("Error creating payout:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}