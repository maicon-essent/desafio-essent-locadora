"use client";
import NavBar from "@/app/navBar";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Locacao() {
  const [titulos, setTitulos] = useState<string[]>([]);
  const [clientes, setClientes] = useState<string[]>([]);

  useEffect(() => {
    fetch("pages/api/filmes/get")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTitulos(data);
        } else {
          console.error("Os títulos dos filmes não são um array:", data);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("pages/api/clientes/get")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setClientes(data);
        } else {
          console.error("Os nomes dos clientes não são um array:", data);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex">
      <div className="w-[15%] h-full">
        <NavBar />
      </div>
      <div className="w-[85%] h-full">
        <div className="flex justify-center flex-row text-5xl py-10">
          <span>CADASTRAR NOVA LOCAÇÃO</span>
        </div>
        <div className="flex flex-row">
          <div className="flex-1 mx-2 items-center justify-center">
            <select
              className="border border-gray_01 transition duration-300 hover:border-primary_hover focus:outline-none focus:border-primary_hover focus-visible:border-primary_hover text-md rounded-md block w-full p-3"
              placeholder="Selecione o Filme"
              defaultValue="Filme"
            >
              {titulos.map((titulo, index) => (
                <option key={index} value={titulo}>
                  {titulo}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
              <span className="material-icons-round text-primary_hover"></span>
            </div>
          </div>
          <div className="flex-1 mx-2 items-center justify-center">
            <select
              className="border border-gray_01 transition duration-300 hover:border-primary_hover focus:outline-none focus:border-primary_hover focus-visible:border-primary_hover text-md rounded-md block w-full p-3"
              placeholder="Selecione o Cliente"
              defaultValue="Cliente"
            >
              {clientes.map((nome, index) => (
                <option key={index} value={nome}>
                  {nome}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-row py-6">
          <div className="flex-1 mx-2 items-center justify-center">
            <input
              type="text"
              className="border border-gray_01 transition duration-300 hover:border-primary_hover focus:outline-none focus:border-primary_hover focus-visible:border-primary_hover text-md rounded-md block w-full p-3"
              placeholder="Data da Retirada"
            />
            <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
              <span className="material-icons-round text-primary_hover"></span>
            </div>
          </div>
          <div className="flex-1 mx-2 items-center justify-center">
            <input
              type="text"
              className="border border-gray_01 transition duration-300 hover:border-primary_hover focus:outline-none focus:border-primary_hover focus-visible:border-primary_hover text-md rounded-md block w-full p-3"
              placeholder="Data da Devolução"
            />
            <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
              <span className="material-icons-round text-primary_hover"></span>
            </div>
          </div>
          <div className="flex-1 mx-2 items-center justify-center">
            <input
              type="text"
              className="border border-gray_01 transition duration-300 hover:border-primary_hover focus:outline-none focus:border-primary_hover focus-visible:border-primary_hover text-md rounded-md block w-full p-3"
              placeholder="Hora Limite para Devolução"
            />
            <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
              <span className="material-icons-round text-primary_hover"></span>
            </div>
          </div>
          <div className="flex-1 mx-2 items-center justify-center">
            <input
              type="text"
              className="border border-gray_01 transition duration-300 hover:border-primary_hover focus:outline-none focus:border-primary_hover focus-visible:border-primary_hover text-md rounded-md block w-full p-3"
              placeholder="Valor Multa por Atraso"
            />
            <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
              <span className="material-icons-round text-primary_hover"></span>
            </div>
          </div>
          <div className="flex-1 mx-2 items-center justify-center">
            <select
              className="border border-gray_01 transition duration-300 hover:border-primary_hover focus:outline-none focus:border-primary_hover focus-visible:border-primary_hover text-md rounded-md block w-full p-3"
              placeholder="Situação"
            >
              <option value="" disabled selected>
                Situação
              </option>
              <option value="1">Regular</option>
              <option value="2">Atrasado</option>
              <option value="3">Entregue</option>
            </select>
            <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
              <span className="material-icons-round text-primary_hover"></span>
            </div>
          </div>
        </div>
        <div className="fixed flex bottom-5 left-[18%] flex-row">
          <div className="flex-none pr-3">
            <p>
              Valor total da Locação{" "}
              <span className="text-primary_hover font-bold text-4xl pl-2">
                R$15,00
              </span>
            </p>
          </div>
        </div>
        <div className="fixed flex bottom-4 right-12 flex-row">
          <div className="flex-none pr-3">
            <Link href="/cadastros">
              <button
                type="submit"
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
