import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-2 h-[700px]">
      <div className="bg-sky-500 justify-center items-center">
        <main className="text-center">
          <h1 className="text-3x1 text-slate-300">Home root</h1>
          Escolha um dos topicos na navbar
        </main>
      </div>
    </div>
  );
}
