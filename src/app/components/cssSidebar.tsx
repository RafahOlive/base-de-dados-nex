import Link from "next/link";
import { FaCss3 } from "react-icons/fa6";
import Line from "./line";

export default function CssSidebar() {
  return (
    <nav className="flex flex-col gap-1 m-4 w-44 h-screen">
      <div className="flex">
        <FaCss3 color="blue" size={25} />
        CSS
      </div>
      <Line />
      <span className="text-[#3c3c43] text-sm font-bold">Formas</span>
      <Link href="/" className="text-[#3c3c43] text-sm">
        Linha
      </Link>
    </nav>
  );
}
