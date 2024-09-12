"use client";
import Link from "next/link";
import Button from "./ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="w-full h-[4rem] top-0 bg-[#222831] flex justify-between px-16 absolute text-white">
        <div className="text-2xl"><Link href="/"><Image src="/scholarific.png" alt="Scholarific" width={100} height={50}/></Link></div>
        <div className="w-[40%] flex justify-evenly gap-4 text-xl mt-6">
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Services</Link>
          <Link href="/">Contact Us</Link>
        </div>
        <div>
          <Link
            className="bg-[#6B58CA] mt-6 btn -translate-y-1 self-center min-h-[2rem] h-[2.5rem] text-white hover:bg-[#6B58CA] w-[6rem] border-none rounded-md"
            href="/register/personal-info"
          >
            Register
          </Link>
        </div>
      </nav>
    </>
  );
}
