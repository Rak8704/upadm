import { NextResponse } from "next/server";

const mockReferrals = [
  {
    id: 1,
    affiliate_id: 1,
    affiliate_name: "John Doe",
    affiliate_code: "AFF-001",
    referred_user_id: 201,
    referred_user_name: "Alice Brown",
    referred_user_email: "alice@example.com",
    status: "converted",
    created_at: "2024-03-01T10:00:00Z",
    converted_at: "2024-03-05T10:00:00Z",
    expires_at: "2024-04-01T10:00:00Z",
    order_id: 1001,
    order_amount: 500.00,
    commission_amount: 50.00,
  },
  {
    id: 2,
    affiliate_id: 1,
    affiliate_name: "John Doe",
    affiliate_code: "AFF-001",
    referred_user_id: 202,
    referred_user_name: "Bob Wilson",
    referred_user_email: "bob@example.com",
    status: "pending",
    created_at: "2024-03-10T10:00:00Z",
    converted_at: null,
    expires_at: "2024-04-10T10:00:00Z",
    order_id: null,
    order_amount: null,
    commission_amount: null,
  },
];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const status = searchParams.get("status") || "all";

    let filteredReferrals = [...mockReferrals];

    if (status !== "all") {
      filteredReferrals = filteredReferrals.filter((r) => r.status === status);
    }

    const total = filteredReferrals.length;
    const totalPages = Math.ceil(total / limit);
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedReferrals = filteredReferrals.slice(start, end);

    return NextResponse.json({
      success: true,
      data: {
        referrals: paginatedReferrals,
        total,
        totalPages,
        currentPage: page,
      },
    });
  } catch (error) {
    console.error("Error fetching referrals:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}