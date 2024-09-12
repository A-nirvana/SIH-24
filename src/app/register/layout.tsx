import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full h-[4rem]"></div>
      <section className="w-full h-auto bg-white text-black px-24 py-20 flex flex-col gap-4">
        <h1 className="text-5xl font-semibold">Register Now</h1>
        <h6 className="text-sm text-[#696B6E]">
          Please fill in the form below. We'll contact you as soon as possible.
        </h6>
        <div className="w-full h-auto ">
          <div className="full flex justify-evenly bg-[#93a1ad57] text-[#3A3A3A] p-3 rounded-t-xl">
            <Link href="/register/personal-info">Personal Information</Link>
            <Link href="/register/educational-details">Education Details</Link>
            <Link href="/register/documents">Documents upload</Link>
            <Link href="/register/bank-details">Bank Details</Link>
          </div>
          {/* <div
            role="tablist"
            className="tabs tabs-boxed full flex justify-evenly bg-[#93a1ad57] text-[#3A3A3A] p-3 rounded-t-xl"
          >
            <Link
              role="tab"
              className="tab tab-active"
              href="/register/personal-info"
            >
              Personal Information
            </Link>
            <Link
              role="tab"
              className="tab"
              href="/register/educational-details"
            >
              Education Details
            </Link>
            <Link role="tab" className="tab" href="/register/documents">
              Documents upload
            </Link>
            <Link role="tab" className="tab" href="/register/bank-details">
              Bank Details
            </Link>
          </div> */}
          <div className="w-full min-h-[10rem] h-auto rounded-b-xl bg-[#E8E8E8]">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
