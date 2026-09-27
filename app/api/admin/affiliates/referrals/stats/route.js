import { NextResponse } from "next/server";

export async function GET() {
  try {
    const stats = {
      totalReferrals: 1250,
      convertedReferrals: 890,
      pendingReferrals: 250,
      expiredReferrals: 110,
      conversionRate: 71.2,
      totalCommission: 45678.50,
      activeAffiliates: 89,
      monthlyGrowth: 12.5,
      topAffiliate: {
        name: "John Doe",
        referrals: 250,
        conversions: 210,
      },
    };

    return NextResponse.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error("Error fetching referral stats:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}