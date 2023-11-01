import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex gap-4 items-center justify-center py-6">
      <Link href="/html" className="hover:text-sky-600 duration-200">Html</Link>
      <Link href="/css">Css</Link>
      <Link href="/javascript">JavaScript</Link>
      <Link href="/react">React</Link>
    </nav>
  );
}
