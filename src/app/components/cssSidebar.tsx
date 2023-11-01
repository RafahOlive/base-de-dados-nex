import Link from "next/link";
import { FaCss3 } from "react-icons/fa6";

export default function CssSidebar() {
  return (
    <nav className="flex flex-col gap-1 m-4">
      <div className="flex">
        <FaCss3 color="blue" size={25} />
        CSS
      </div>
      <div className="h-px bg-gray-800 scroll-m-5" />
      <span className="text-[#3c3c43] text-sm font-bold">Tags</span>
      <Link href="/html/nav" className="text-[#3c3c43] text-sm">
        Nav
      </Link>
    </nav>
  );
}