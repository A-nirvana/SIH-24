"use client";
import Link from "next/link";
import Button from "./ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="w-full h-[4rem] top-0 py-4 bg-[#222831] flex justify-between px-16 absolute text-white">
        <div className="text-2xl">{/* <Image src="" /> */}Logo</div>
        <div className="w-[40%] flex justify-evenly gap-4 text-xl">
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Services</Link>
          <Link href="/">Contact Us</Link>
        </div>
        <div>
          <Link
            className="bg-[#6B58CA] btn -translate-y-1 self-center min-h-[2rem] h-[2.5rem] text-white hover:bg-[#6B58CA] w-[6rem] border-none rounded-md"
            href="/register/personal-info"
          >
            Register
          </Link>
        </div>
      </nav>
    </>
  );
}
