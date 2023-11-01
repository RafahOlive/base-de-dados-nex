import Link from "next/link";
import { FaReact } from "react-icons/fa6";
import Line from "./line";

export default function ReactSidebar() {
  return (
    <nav className="flex flex-col gap-1 m-4 w-44 h-screen">
      <div className="flex">
        <FaReact color="blue" size={25} />
        React
      </div>
      <Line />
      <span className="text-[#3c3c43] text-sm font-bold">NextJs</span>
      <Link href="/" className="text-[#3c3c43] text-sm">
        Porque Nextjs
      </Link>
    </nav>
  );
}