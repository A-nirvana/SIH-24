import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full h-[4rem] bg-[#003d72] flex justify-between">
      <div>Logo</div>
      <div className="flex justify-around gap-4">
        <Link href="/">FAQ's</Link>
        <Link href="/">Announcement</Link>
        <Link href="/">HelpDesk</Link>
      </div>
    </nav>
  );
}
