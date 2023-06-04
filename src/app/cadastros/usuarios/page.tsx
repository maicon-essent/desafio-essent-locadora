"use client";
import NavBar from "@/app/navBar";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Usuarios() {
  const [newUser, setNewUser] = useState("");

  async function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    await fetch("http://localhost:3000/api/usuarios/create", {
      method: "POST",
      body: JSON.stringify({
        nome: newUser,
        email: newUser,
        password: newUser,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div className="flex">
      <div className="w-[15%] h-full">
        <NavBar />
      </div>
      <div className="w-[85%] h-full">
        <div className="flex justify-center flex-row text-5xl py-10">
          <span>CADASTRAR NOVO USUÁRIO</span>
        </div>
        <form onSubmit={handleCreateUser}>
          <div className="flex flex-row">
            <div className="flex-1 mx-2 items-center justify-center">
              <input
                type="text"
                className="border border-gray_01 transition duration-300 hover:border-primary_hover focus:outline-none focus:border-primary_hover focus-visible:border-primary_hover text-md rounded-md block w-full p-3"
                placeholder="Nome do Usuário"
                name="nome"
                value={newUser}
                onChange={(e) => setNewUser(e.target.value)}
              />
              <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
                <span className="material-icons-round text-primary_hover"></span>
              </div>
            </div>
            <div className="flex-1 mx-2 items-center justify-center">
              <input
                type="email"
                className="border border-gray_01 transition duration-300 hover:border-primary_hover focus:outline-none focus:border-primary_hover focus-visible:border-primary_hover text-md rounded-md block w-full p-3"
                placeholder="E-Mail"
                name="email"
              />
              <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
                <span className="material-icons-round text-primary_hover"></span>
              </div>
            </div>
            <div className="flex-1 mx-2 items-center justify-center">
              <input
                type="password"
                className="border border-gray_01 transition duration-300 hover:border-primary_hover focus:outline-none focus:border-primary_hover focus-visible:border-primary_hover text-md rounded-md block w-full p-3"
                placeholder="Senha"
                name="password"
              />
              <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
                <span className="material-icons-round text-primary_hover"></span>
              </div>
            </div>
          </div>
        </form>
        <div className="fixed flex bottom-4 right-12 flex-row">
          <div className="flex-none pr-3">
            <Link href="/cadastros">
              <button
                type="button"
                className="relative flex flex-row w-48 justify-center transition duration-300 rounded-md bg-gray-200 py-3 px-3 text-sm font-semibold text-primary_hover hover:bg-gray_01 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary_hover"
              >
                <span className="relative inset-y-0 left-0 flex items-center justify-center text-center">
                  CANCELAR
                </span>
              </button>
            </Link>
          </div>
          <div className="flex-none">
            <Link href="/cadastros">
              <button
                type="submit"
                className="relative flex flex-row w-48 justify-center transition duration-300 rounded-md bg-primary py-3 px-3 text-sm font-semibold text-white hover:bg-primary_hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary_hover"
              >
                <span className="relative inset-y-0 left-0 flex items-center justify-center text-center">
                  SALVAR
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
