import { NextResponse } from "next/server";

// Mock data (পরবর্তীতে ডাটাবেস দিয়ে replace করবেন)
const mockAffiliates = [
  {
    id: 1,
    user_id: 101,
    user_name: "John Doe",
    user_email: "john@example.com",
    affiliate_code: "AFF-001",
    commission_rate: 10,
    status: "active",
    referral_count: 25,
    total_earnings: 1250.00,
    pending_earnings: 350.00,
    created_at: "2024-01-15T10:00:00Z",
  },
  {
    id: 2,
    user_id: 102,
    user_name: "Jane Smith",
    user_email: "jane@example.com",
    affiliate_code: "AFF-002",
    commission_rate: 15,
    status: "pending",
    referral_count: 5,
    total_earnings: 250.00,
    pending_earnings: 250.00,
    created_at: "2024-02-01T10:00:00Z",
  },
  {
    id: 3,
    user_id: 103,
    user_name: "Mike Johnson",
    user_email: "mike@example.com",
    affiliate_code: "AFF-003",
    commission_rate: 12,
    status: "active",
    referral_count: 42,
    total_earnings: 2100.00,
    pending_earnings: 500.00,
    created_at: "2024-01-10T10:00:00Z",
  },
];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "all";

    let filteredAffiliates = [...mockAffiliates];

    // Filter by search
    if (search) {
      filteredAffiliates = filteredAffiliates.filter(
        (a) =>
          a.user_name.toLowerCase().includes(search.toLowerCase()) ||
          a.user_email.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by status
    if (status !== "all") {
      filteredAffiliates = filteredAffiliates.filter((a) => a.status === status);
    }

    // Pagination
    const total = filteredAffiliates.length;
    const totalPages = Math.ceil(total / limit);
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedAffiliates = filteredAffiliates.slice(start, end);

    return NextResponse.json({
      success: true,
      data: {
        affiliates: paginatedAffiliates,
        total,
        totalPages,
        currentPage: page,
      },
    });
  } catch (error) {
    console.error("Error fetching affiliates:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}