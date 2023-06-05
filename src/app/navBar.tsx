import Link from "next/link";
import {
  MdLibraryAdd,
  MdOutlineLogout,
  MdOutlineSpaceDashboard,
} from "react-icons/md";

export default function NavBar() {
  return (
    <aside className="fixed top-0 left-0 w-[15%] h-full" aria-label="Sidenav">
      <div className="overflow-y-auto py-5 mb-24 px-3 h-full bg-primary border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="relative mb-6 justify-center flex">
          <div className="disabled:opacity-75 border-gray_01 focus:outline-none focus:border-primary_hover focus-visible:border-primary_hover text-md rounded-md block w-full h-16 p-3">
            <span className="text-white flex items-center justify-center text-2xl">
              LOCADORA
            </span>
          </div>
        </div>
        <ul className="space-y-2 mt-24">
          <li>
            <Link
              href="/locacao"
              type="button"
              className="flex items-center p-2 w-full font-normal transition duration-75 group hover:bg-primary_hover rounded-lg"
            >
              <MdOutlineSpaceDashboard className="text-gray-200 text-3xl" />
              <span className="flex-1 ml-3 text-left whitespace-nowrap text-gray-200">
                Nova Locação
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/cadastros"
              type="button"
              className="flex items-center p-2 w-full font-normal transition duration-75 group hover:bg-primary_hover rounded-lg"
            >
              <MdLibraryAdd className="text-gray-200 text-3xl" />
              <span className="flex-1 ml-3 text-left whitespace-nowrap text-gray-200">
                Cadastros
              </span>
            </Link>
          </li>
        </ul>
        <div className="absolute w-max bottom-0 py-4">
          <ul className="space-y-2 ">
            <li>
              <Link
                href="/login"
                type="button"
                className="flex items-center p-2 w-full font-normal transition duration-75 group hover:bg-primary_hover rounded-lg"
              >
                <MdOutlineLogout className="text-gray-200 text-3xl" />
                <span className="flex-1 ml-3 text-left whitespace-nowrap text-gray-200">
                  Sair
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
