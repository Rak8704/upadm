import { DeviceType, SlideImagePage } from "@/app/images/page";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const device = req.nextUrl.searchParams.get("device") as DeviceType;
    const page = req.nextUrl.searchParams.get("page") as SlideImagePage;

    if (!device || !page) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 }
      );
    }

    const images = await prisma.slideImage.findMany({
      where: { device, page },
      orderBy: { placement: "asc" },
    });

    return NextResponse.json({ images });
  } catch (error) {
    console.error("LIST API ERROR:", error);

    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
