import Link from "next/link";
import { FaHtml5 } from "react-icons/fa6";
import Line from "./line";

export default function Sidebar() {
  return (
    <nav className="flex flex-col gap-1 m-4 w-44 h-screen">
      <div className="flex">
        <FaHtml5 color="red" size={25} />
        HTML
      </div>
      <Line />
      <span className="text-[#3c3c43] text-sm font-bold">Tags</span>
      <Link href="/html/main" className="text-[#3c3c43] text-sm">
        Main
      </Link>
      <Link href="/html/nav" className="text-[#3c3c43] text-sm">
        Nav
      </Link>
    </nav>
  );
}
