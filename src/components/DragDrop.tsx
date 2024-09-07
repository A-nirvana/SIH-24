"use client";
import Image from "next/image";
import React, { useState, useCallback } from "react";

interface DragAndDropImageUploaderProps {
  onImageUpload: (file: File) => void;
}
const DragAndDropImageUploader: React.FC<DragAndDropImageUploaderProps> = ({
  onImageUpload,
}) => {
  // const [isDragging, setIsDragging] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    // setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    // setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    // setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const imgLink = URL.createObjectURL(file);
      setImagePreview(imgLink);
    }
  }, []);

  const handleImageUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file && file.type.startsWith("image/")) {
        const imgLink = URL.createObjectURL(file);
        setImagePreview(imgLink);
      }
    },
    []
  );

  return (
    <label
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`flex justify-center items-center p-4`}
    >
      <input
        id="image"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        hidden
      />

      <div className="flex flex-col justify-center p-2 items-center w-full min-h-[8rem] bg-gray-100 rounded-lg">
        {imagePreview ? (
          <Image
            src={imagePreview}
            width={150}
            height={150}
            alt="Uploaded preview"
            className="max-w-full rounded-lg"
          />
        ) : (
          <>
            <Image
              src="/upload.png"
              width={150}
              height={150}
              alt="Uploaded preview"
              className="max-w-full rounded-lg"
            />
            <p className="text-black">
              Drag and drop an image, or click to select one
            </p>
          </>
        )}
      </div>
    </label>
  );
};

export default DragAndDropImageUploader;
