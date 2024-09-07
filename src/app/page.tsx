"use client";

import DragAndDropImageUploader from "@/components/DragDrop";
export default function Home() {
  const handleImageUpload = (file: File) => {
    console.log("Image uploaded:", file);
  };
  return (
    <section className="h-[100vh] w-full bg-gradient-to-b from-customBlueDark via-customBlueLight to-customGray"></section>
  );
}
