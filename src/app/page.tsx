"use client";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export default function Home() {
  const handleImageUpload = (file: File) => {
    console.log("Image uploaded:", file);
  };
  return (
    <main className={"h-[100vh] w-full bg-[#222831] flex px-16 " + jost.className}>
      <section className="flex flex-col items-center justify-center ml-20 h-full w-1/2">
      <p className=" mt-12 text-6xl font-semibold">
      Lorem ipsum dolor sit amet consectetur
      </p>
      <p className="mt-4 text-2xl mr-12">lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia .</p>
      </section>
      {/* The image is not good quality ask DEvanuj to share original */}
      <section><img src="/landingGirl.svg" className="w-96"/></section>
    </main>
  );
}
