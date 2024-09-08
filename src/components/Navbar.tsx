"use client";
import Link from "next/link";
import Button from "./ui/button";

export default function Navbar() {
  return (
    <nav className="w-full h-[4rem] top-0 px-8 py-4 bg-[#222831] flex justify-between absolute">
      <div>Logo</div>
      <div className="flex justify-around gap-4">
        <Link href="/">FAQ's</Link>
        <Link href="/">Announcement</Link>
        <Link href="/">HelpDesk</Link>
      </div>
      <div><Button onClick={()=>{}}>Register</Button></div>
    </nav>
  );
}
