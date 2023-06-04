import NavBar from "./navBar";

export default function HomePage() {
  return (
    <div className="flex">
      <div className="w-[15%] h-full">
        <NavBar />
      </div>
      <div className="w-[85%] h-full">
        <div className="flex justify-center flex-row text-5xl py-10">
          <span>BEM VINDO(A) A LOCADORA DE FILMES ESSENT</span>
        </div>
        <div className="flex justify-center text-justify p-8 flex-row text-xl py-10">
          <span>
            Você pode navegar no menu lateral e realizar o cadastro de uma nova
            locação de filme ou se preferir pode realizar diveros tipos de
            cadastros, como por exemplo: Atores, Diretores, Estoque de um novo
            Filme, Clientes e Usuários do sistema.
          </span>
        </div>
      </div>
    </div>
  );
}
