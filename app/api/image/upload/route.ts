import { SlideImagePage } from "@/app/images/page";
import { uploadToCloudinary } from "@/config/cloudinary";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const device = req.nextUrl.searchParams.get("device") as
      | "mobile"
      | "desktop"
      | "tablet"
      | null;

    const page = req.nextUrl.searchParams.get("page") as SlideImagePage;

    const images = await prisma.slideImage.findMany({
      where: {
        device: device || undefined,
        page: page || undefined,
      },
      orderBy: { id: "asc" },
    });

    return NextResponse.json({ images });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File | null;
    const page = formData.get("page") as string;
    const placement = formData.get("placement") as string;
    const device = formData.get("device") as string;
    const folderName = formData.get("folderName") as string;

    if (!file) {
      return NextResponse.json({ error: "File missing" }, { status: 400 });
    }

    const fileName = `${page}_${placement}_${Date.now()}`;

    // Upload to Cloudinary
    const imageUrl = await uploadToCloudinary(file, folderName, fileName);

    if (!imageUrl) {
      return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }

    // Save in DB
    const newImage = await prisma.slideImage.create({
      data: {
        imageUrl,
        page: page as any,
        placement: placement as any,
        device: device as any,
      },
    });

    return NextResponse.json({ message: "Uploaded", image: newImage });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to upload" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const formData = await req.formData();
    const id = Number(formData.get("id"));
    const file = formData.get("file") as File | null;

    const page = formData.get("page") as string | null;
    const placement = formData.get("placement") as string | null;
    const device = formData.get("device") as string | null;
    const folderName = formData.get("folderName") as string | null;

    if (!id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });

    let imageUrl: string | undefined = undefined;

    if (file) {
      const fileName = `${page}_${placement}_${Date.now()}`;
      const uploaded = await uploadToCloudinary(file, folderName!, fileName);
      if (uploaded) imageUrl = uploaded;
    }

    const updated = await prisma.slideImage.update({
      where: { id },
      data: {
        ...(imageUrl && { imageUrl }),
        ...(page && { page: page as any }),
        ...(placement && { placement: placement as any }),
        ...(device && { device: device as any }),
      },
    });

    return NextResponse.json({ message: "Updated", image: updated });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get("id"));

    if (!id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });

    await prisma.slideImage.delete({ where: { id } });

    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
