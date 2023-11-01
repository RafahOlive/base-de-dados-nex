import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-slate-700 h-6 flex gap-4 items-center justify-center py-6">
      <Link href="/html">Html</Link>
      <Link href="/css">Css</Link>
      <Link href="/">JavaScript</Link>
      <Link href="/">React</Link>
    </nav>
  );
}
