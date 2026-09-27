import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Mock stats data
    const stats = {
      totalAffiliates: 150,
      activeAffiliates: 89,
      pendingAffiliates: 45,
      suspendedAffiliates: 16,
      totalPaidOut: 45678.50,
      avgCommissionRate: 12.5,
      totalReferrals: 1250,
      monthlyGrowth: 15,
    };

    return NextResponse.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error("Error fetching affiliate stats:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}