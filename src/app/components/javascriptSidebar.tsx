import Link from "next/link";
import { FaJs } from "react-icons/fa6";
import Line from "./line";

export default function JavascriptSidebar() {
  return (
    <nav className="flex flex-col gap-1 m-4 w-44 h-screen">
      <div className="flex">
        <FaJs color="olive" size={25} />
        JavaScript
      </div>
      <Line />
      <span className="text-[#3c3c43] text-sm font-bold">Array</span>
      <Link href="/" className="text-[#3c3c43] text-sm">
        Map
      </Link>
    </nav>
  );
}
