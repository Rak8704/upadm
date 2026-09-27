import { NextResponse } from "next/server";

const mockCommissions = [
  {
    id: 1,
    affiliate_id: 1,
    affiliate_name: "John Doe",
    affiliate_email: "john@example.com",
    affiliate_code: "AFF-001",
    order_id: 1001,
    order_amount: 500.00,
    amount: 50.00,
    rate: 10,
    status: "paid",
    created_at: "2024-03-01T10:00:00Z",
    paid_at: "2024-03-05T10:00:00Z",
    notes: null,
  },
  {
    id: 2,
    affiliate_id: 2,
    affiliate_name: "Jane Smith",
    affiliate_email: "jane@example.com",
    affiliate_code: "AFF-002",
    order_id: 1002,
    order_amount: 300.00,
    amount: 45.00,
    rate: 15,
    status: "pending",
    created_at: "2024-03-10T10:00:00Z",
    paid_at: null,
    notes: null,
  },
  {
    id: 3,
    affiliate_id: 1,
    affiliate_name: "John Doe",
    affiliate_email: "john@example.com",
    affiliate_code: "AFF-001",
    order_id: 1003,
    order_amount: 750.00,
    amount: 75.00,
    rate: 10,
    status: "pending",
    created_at: "2024-03-12T10:00:00Z",
    paid_at: null,
    notes: null,
  },
];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const status = searchParams.get("status") || "all";
    const search = searchParams.get("search") || "";

    let filteredCommissions = [...mockCommissions];

    if (status !== "all") {
      filteredCommissions = filteredCommissions.filter((c) => c.status === status);
    }

    if (search) {
      filteredCommissions = filteredCommissions.filter(
        (c) =>
          c.affiliate_name.toLowerCase().includes(search.toLowerCase()) ||
          c.affiliate_code.toLowerCase().includes(search.toLowerCase())
      );
    }

    const total = filteredCommissions.length;
    const totalPages = Math.ceil(total / limit);
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedCommissions = filteredCommissions.slice(start, end);

    return NextResponse.json({
      success: true,
      data: {
        commissions: paginatedCommissions,
        total,
        totalPages,
        currentPage: page,
      },
    });
  } catch (error) {
    console.error("Error fetching commissions:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}