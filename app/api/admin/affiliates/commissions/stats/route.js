import { NextResponse } from "next/server";

export async function GET() {
  try {
    const stats = {
      totalCommissions: 1250,
      totalAmount: 45678.50,
      pendingAmount: 12500.00,
      paidAmount: 33178.50,
      avgCommissionRate: 12.5,
      totalAffiliates: 89,
      monthlyGrowth: 8.5,
    };

    return NextResponse.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error("Error fetching commission stats:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}