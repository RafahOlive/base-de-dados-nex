import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-2 h-[700px]">
      <div className="bg-sky-200 justify-center items-center">
        <main className=" m-4 text-center">
          <h1 className="text-5xl text-slate-700">Bem vindo!</h1>
          Base de dados criada para armazenar informações aprendidas ao longo do
          tempo, e também poder compartilhar informações com outros devs.
        </main>
      </div>
    </div>
  );
}
