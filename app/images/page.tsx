// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { Upload, Image as ImageIcon } from "lucide-react";
// import { toast } from "sonner";
// import Image from "next/image";

// export type DeviceType = "mobile" | "desktop" | "tablet";
// export type SlideImagePage =
//   | "home"
//   | "referral"
//   | "wallet"
//   | "promotions"
//   | "games";
// export type SlidePlacement = "first_slide" | "second_slide" | "third_slide";

// interface SlideImage {
//   id: number;
//   imageUrl: string;
//   page: SlideImagePage;
//   placement: SlidePlacement;
//   device: DeviceType;
// }

// const placements: SlidePlacement[] = [
//   "first_slide",
//   "second_slide",
//   "third_slide",
// ];

// const pages: SlideImagePage[] = [
//   "home",
//   "referral",
//   "wallet",
//   "promotions",
//   "games",
// ];

// export default function ImagesPage() {
//   const [selectedDevice, setSelectedDevice] = useState<DeviceType>("mobile");
//   const [selectedPage, setSelectedPage] = useState<SlideImagePage>("home");
//   const [images, setImages] = useState<SlideImage[]>([]);

//   // Fetch images from DB
//   const fetchImages = async () => {
//     try {
//       const res = await fetch(
//         `/api/image/list?device=${selectedDevice}&page=${selectedPage}`
//       );
//       const data = await res.json();
//       setImages(data.images);
//     } catch (err) {
//       console.log(err);
//       toast.error("Failed to load images");
//     }
//   };

//   useEffect(() => {
//     fetchImages();
//   }, [selectedDevice, selectedPage]);

//   // Upload image
//   const handleUpload = async (
//     placement: SlidePlacement,
//     existingId?: number
//   ) => {
//     const input = document.createElement("input");
//     input.type = "file";
//     input.accept = "image/*";
//     input.value = ""; // reset previous file selection

//     input.onchange = async (e: any) => {
//       const file = e.target.files?.[0];
//       if (!file) return;

//       const folderName = `${selectedPage}_${placement}`;

//       const formData = new FormData();
//       formData.append("file", file);
//       formData.append("page", selectedPage);
//       formData.append("placement", placement);
//       formData.append("device", selectedDevice);
//       formData.append("folderName", folderName);
//       if (existingId) formData.append("id", String(existingId));

//       const toastId = toast.loading("Uploading...");

//       try {
//         const res = await fetch("/api/image/upload", {
//           method: existingId ? "PUT" : "POST",
//           body: formData,
//         });

//         if (!res.ok) throw new Error("Upload failed");

//         toast.dismiss(toastId);
//         toast.success("Image uploaded!");

//         fetchImages();
//       } catch (err) {
//         toast.dismiss(toastId);
//         toast.error("Failed to upload");
//       }
//     };

//     input.click();
//   };

//   return (
//     <div className="p-8 space-y-8 bg-white dark:bg-black min-h-screen text-black dark:text-white transition">
//       {/* DEVICE TOGGLE */}
//       <div className="flex justify-center gap-4">
//         {(["mobile", "desktop", "tablet"] as DeviceType[]).map((d) => (
//           <button
//             key={d}
//             onClick={() => setSelectedDevice(d)}
//             className={`px-6 py-2 rounded-xl font-semibold border transition
//             ${
//               selectedDevice === d
//                 ? "bg-black text-white dark:bg-white dark:text-black"
//                 : "bg-white text-black dark:bg-gray-900 dark:text-white"
//             }`}
//           >
//             {d.toUpperCase()}
//           </button>
//         ))}
//       </div>

//       <p className="text-center underline text-sm text-gray-600 dark:text-gray-200 mt-2">
//         Please upload images in the correct aspect ratio:
//         <span className="font-semibold"> 9:4 </span> (Mobile) and
//         <span className="font-semibold"> 96:19 </span> (Desktop).
//       </p>

//       {/* PAGE TOGGLE */}
//       <div className="flex justify-center gap-4">
//         {pages.map((p) => (
//           <button
//             key={p}
//             onClick={() => setSelectedPage(p)}
//             className={`px-6 py-2 rounded-xl font-semibold border transition
//             ${
//               selectedPage === p
//                 ? "bg-yellow-400 text-black dark:bg-yellow-500"
//                 : "bg-white text-black dark:bg-gray-900 dark:text-white"
//             }`}
//           >
//             {p.toUpperCase()}
//           </button>
//         ))}
//       </div>

//       {/* IMAGE ROWS */}
//       {placements.map((placement) => {
//         const filtered = images.filter((img) => img.placement === placement);

//         return (
//           <div
//             key={placement}
//             className="border rounded-xl p-4 space-y-4 bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 transition"
//           >
//             <h2 className="text-lg font-bold">
//               {placement.replace("_", " ").toUpperCase()}
//             </h2>

//             <div className="flex gap-6 flex-wrap">
//               {/* Existing Images */}
//               <div className="flex gap-4 flex-wrap">
//                 {filtered.map((img) => (
//                   <div
//                     key={img.id}
//                     className="flex flex-col items-center gap-2"
//                   >
//                     {/* <div className="relative w-40 h-24 rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700">
//                       <Image
//                         src={img.imageUrl}
//                         alt="slide image"
//                         fill
//                         className="object-cover"
//                       />
//                     </div> */}

//                     <div
//                       className={`relative ${
//                         selectedDevice === "desktop"
//                           ? "aspect-96/19"
//                           : " aspect-9/4 "
//                       } w-[200px] rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700`}
//                     >
//                       <Image
//                         src={img.imageUrl}
//                         alt="slide image"
//                         fill
//                         className="object-cover"
//                       />
//                     </div>

//                     <Upload
//                       className="cursor-pointer text-black dark:text-white h-10 w-10 p-1 border border-gray-300 dark:border-gray-700 rounded-full mt-2"
//                       onClick={() => handleUpload(placement, img.id)}
//                     />
//                   </div>
//                 ))}
//               </div>

//               {/* NEW IMAGE UPLOAD BOX */}
//               <div className="flex flex-col items-center">
//                 <div
//                   className="w-40 h-24 border rounded-xl flex items-center justify-center
//                   text-gray-500 dark:text-gray-300 border-gray-300 dark:border-gray-700"
//                 >
//                   <ImageIcon />
//                 </div>

//                 <Upload
//                   className="cursor-pointer text-black dark:text-white  h-10 w-10 p-1 border border-gray-300 dark:border-gray-700 rounded-full mt-2"
//                   onClick={() => handleUpload(placement)}
//                 />
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Upload, Trash, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

export type DeviceType = "mobile" | "desktop" | "tablet";
export type SlideImagePage =
  | "home"
  | "referral"
  | "wallet"
  | "promotions"
  | "games";
export type SlidePlacement = "first_slide" | "second_slide" | "third_slide";

interface SlideImage {
  id: number;
  imageUrl: string;
  page: SlideImagePage;
  placement: SlidePlacement;
  device: DeviceType;
}

const placements: SlidePlacement[] = [
  "first_slide",
  "second_slide",
  "third_slide",
];

const pages: SlideImagePage[] = [
  "home",
  // "referral",
  // "wallet",
  // "promotions",
  // "games",
];

export default function ImagesPage() {
  const [selectedDevice, setSelectedDevice] = useState<DeviceType>("mobile");
  const [selectedPage, setSelectedPage] = useState<SlideImagePage>("home");
  const [images, setImages] = useState<SlideImage[]>([]);

  const fetchImages = async () => {
    try {
      const res = await fetch(
        `/api/image/list?device=${selectedDevice}&page=${selectedPage}`
      );
      const data = await res.json();
      setImages(data.images);
    } catch {
      toast.error("Failed to load images");
    }
  };

  useEffect(() => {
    fetchImages();
  }, [selectedDevice, selectedPage]);

  const handleUpload = async (
    placement: SlidePlacement,
    existingId?: number
  ) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.value = "";

    input.onchange = async (e: any) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const folderName = `${selectedPage}_${placement}`;
      const formData = new FormData();
      formData.append("file", file);
      formData.append("page", selectedPage);
      formData.append("placement", placement);
      formData.append("device", selectedDevice);
      formData.append("folderName", folderName);
      if (existingId) formData.append("id", String(existingId));

      const toastId = toast.loading("Uploading...");
      try {
        const res = await fetch("/api/image/upload", {
          method: existingId ? "PUT" : "POST",
          body: formData,
        });
        if (!res.ok) throw new Error("Upload failed");

        toast.dismiss(toastId);
        toast.success("Image uploaded!");
        fetchImages();
      } catch {
        toast.dismiss(toastId);
        toast.error("Failed to upload");
      }
    };

    input.click();
  };

  const handleDelete = async (id: number) => {
    const confirmed = confirm("Are you sure you want to delete this image?");
    if (!confirmed) return;

    const toastId = toast.loading("Deleting...");
    try {
      const res = await fetch(`/api/image/upload?id=${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");

      toast.dismiss(toastId);
      toast.success("Image deleted!");
      fetchImages();
    } catch {
      toast.dismiss(toastId);
      toast.error("Failed to delete");
    }
  };

  return (
    <div className="p-8 space-y-8 bg-white dark:bg-black min-h-screen text-black dark:text-white transition">
      {/* DEVICE TOGGLE */}
      <div className="flex justify-center gap-4">
        {(["mobile", "desktop"] as DeviceType[]).map((d) => (
          <button
            key={d}
            onClick={() => setSelectedDevice(d)}
            className={`px-6 py-2 rounded-xl font-semibold border transition ${
              selectedDevice === d
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-white text-black dark:bg-gray-900 dark:text-white"
            }`}
          >
            {d.toUpperCase()}
          </button>
        ))}
      </div>

      <p className="text-center underline text-sm text-gray-600 dark:text-gray-200 mt-2">
        Please upload images in the correct aspect ratio:
        <span className="font-semibold"> 9:4 </span> (Mobile) and
        <span className="font-semibold"> 96:19 </span> (Desktop).
      </p>

      {/* PAGE TOGGLE */}
      <div className="flex justify-center gap-4">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => setSelectedPage(p)}
            className={`px-6 py-2 rounded-xl font-semibold border transition ${
              selectedPage === p
                ? "bg-yellow-400 text-black dark:bg-yellow-500"
                : "bg-white text-black dark:bg-gray-900 dark:text-white"
            }`}
          >
            {p.toUpperCase()}
          </button>
        ))}
      </div>

      {/* IMAGE ROWS */}
      {placements.map((placement) => {
        const filtered = images.filter((img) => img.placement === placement);

        return (
          <div
            key={placement}
            className="border rounded-xl p-4 space-y-4 bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 transition"
          >
            <h2 className="text-lg font-bold">
              {placement.split("_")[0].toUpperCase()} ROW
            </h2>

            <div className="flex gap-6 flex-wrap">
              {/* Existing Images */}
              <div className="flex gap-4 flex-wrap">
                {filtered.map((img) => (
                  <div
                    key={img.id}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className={`relative ${
                        selectedDevice === "desktop"
                          ? "aspect-96/19"
                          : "aspect-9/4"
                      } w-[200px] rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700`}
                    >
                      <Image
                        src={img.imageUrl}
                        alt="slide image"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex gap-2 mt-2">
                      <Trash
                        className="cursor-pointer text-red-500 dark:text-red-400 h-10 w-10 p-2 border border-gray-300 dark:border-gray-700 rounded-full"
                        onClick={() => handleDelete(img.id)}
                      />
                      <Upload
                        className="cursor-pointer text-black dark:text-white h-10 w-10 p-2 border border-gray-300 dark:border-gray-700 rounded-full"
                        onClick={() => handleUpload(placement, img.id)}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* NEW IMAGE UPLOAD BOX */}
              <div className="flex flex-col items-center">
                <div
                  className="w-40 h-24 border rounded-xl flex items-center justify-center 
                  text-gray-500 dark:text-gray-300 border-gray-300 dark:border-gray-700"
                >
                  <ImageIcon />
                </div>

                <Upload
                  className="cursor-pointer text-black dark:text-white h-10 w-10 p-2 border border-gray-300 dark:border-gray-700 rounded-full mt-2"
                  onClick={() => handleUpload(placement)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
