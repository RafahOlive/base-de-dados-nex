import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center bg-slate-100 h-96 m-4">
      <div className="flex justify-center items-center h-full">
        <div>
          <h1 className="text-xl">Exemplo 1</h1>
          <Link href="main/exemplo2" className="text-xl font-bold underline">
            Exemplo 2
          </Link>
        </div>
      </div>
    </div>
  );
}
