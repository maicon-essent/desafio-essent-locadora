import Link from "next/link";
import NavBar from "../navBar";

export default function Cadastros() {
  return (
    <div className="flex">
      <div className="w-[15%] h-full">
        <NavBar />
      </div>
      <div className="w-[85%] h-full">
        <div className="flex justify-center flex-row text-5xl py-10">
          <span>CADASTROS</span>
        </div>
        <div className="flex justify-center flex-row">
          <div className="flex flex-row justify-center flex-nowrap px-2 py-2 cursor-pointer">
            <Link href="/cadastros/atores">
              <div className="overflow-hidden rounded-xl border bg-white text-slate-500 shadow-md shadow-slate-200 hover:shadow-xl w-40 h-16 mx-4 px-4 py-1">
                <div className="basis-[15%]">
                  <p className="text-xl font-bold text-primary text-center pt-3">
                    Atores
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/cadastros/diretores">
              <div className="overflow-hidden rounded-xl border bg-white text-slate-500 shadow-md shadow-slate-200 hover:shadow-xl w-40 h-16 mx-4 px-4 py-1">
                <div className="basis-[15%]">
                  <p className="text-xl font-bold text-primary text-center pt-3">
                    Diretores
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/cadastros/filmes">
              <div className="overflow-hidden rounded-xl border bg-white text-slate-500 shadow-md shadow-slate-200 hover:shadow-xl w-40 h-16 mx-4 px-4 py-1">
                <div className="basis-[15%]">
                  <p className="text-xl font-bold text-primary text-center pt-3">
                    Filmes
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/cadastros/clientes">
              <div className="overflow-hidden rounded-xl border bg-white text-slate-500 shadow-md shadow-slate-200 hover:shadow-xl w-40 h-16 mx-4 px-4 py-1">
                <div className="basis-[15%]">
                  <p className="text-xl font-bold text-primary text-center pt-3">
                    Clientes
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/cadastros/usuarios">
              <div className="overflow-hidden rounded-xl border bg-white text-slate-500 shadow-md shadow-slate-200 hover:shadow-xl w-40 h-16 mx-4 px-4 py-1">
                <div className="basis-[15%]">
                  <p className="text-xl font-bold text-primary text-center pt-3">
                    Usuários
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
