import { v2 as cloudinary } from "cloudinary";

// Configuration
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (
  file: File,
  folderName: string,
  fileName: string
): Promise<string | null> => {
  if (!file) return null;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64Image = `data:${file.type};base64,${buffer.toString("base64")}`;

  // Upload with a user-specific folder and custom filename
  const uploadResponse = await cloudinary.uploader.upload(base64Image, {
    folder: `babu88/${folderName}`,
    public_id: fileName,
    overwrite: true,
  });

  return uploadResponse.secure_url;
};
