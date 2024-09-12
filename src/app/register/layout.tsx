"use client";

import Link from "next/link";
import { useState } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [page, setPage] = useState<0 | 1 | 2 | 3 | null>(null);
  return (
    <>
      <div className="w-full h-[4rem]"></div>
      <section className="w-full h-auto bg-white text-black px-[10%] py-16 flex flex-col gap-4">
        <h1 className="text-5xl font-semibold ml-[2%]">Register Now</h1>
        <h6 className="text-sm text-[#696B6E] ml-[2%]">
          Please fill in the form below. We'll contact you as soon as possible.
        </h6>
        <div className="w-full h-auto mt-12 flex flex-col items-center bg-[#93a1ad57] rounded-t-xl">
          <div className="full flex justify-evenly text-[#3A3A3A] w-4/5">
            <Link
              href="/register/personal-info"
              className={
                page == 0
                  ? "shadow-xl shadow-[#13131350] rounded-b-2xl p-3"
                  : "p-3"
              }
              onClick={() => {
                setPage(0);
              }}
            >
              Personal Information
            </Link>
            <Link
              href="/register/educational-details"
              className={
                page == 1
                  ? "shadow-xl shadow-[#13131350] rounded-b-2xl p-3"
                  : "p-3"
              }
              onClick={() => {
                setPage(1);
              }}
            >
              Education Details
            </Link>
            <Link
              href="/register/documents"
              className={
                page == 2
                  ? "shadow-xl shadow-[#13131350] rounded-b-2xl p-3"
                  : "p-3"
              }
              onClick={() => {
                setPage(2);
              }}
            >
              Documents upload
            </Link>
            <Link
              href="/register/bank-details"
              className={
                page == 3
                  ? "shadow-xl shadow-[#13131350] rounded-b-2xl p-3"
                  : "p-3"
              }
              onClick={() => {
                setPage(3);
              }}
            >
              Bank Details
            </Link>
          </div>
          <div className="w-full min-h-[10rem] h-auto rounded-b-xl bg-[#E8E8E8]">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
