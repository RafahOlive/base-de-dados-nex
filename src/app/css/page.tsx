import Link from "next/link";

import { FaCss3 } from "react-icons/fa6";

export default function CssLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="absolute w-[] h-screen bg-[#F6F6F7]">
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
      </div>

      <div className=" bg-gray-800 w-[45rem] h-screen mx-4 absolute left-[150px] top-[6rem]">{children}</div>
    </>
  );
}
