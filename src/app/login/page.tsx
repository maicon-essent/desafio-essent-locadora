import Link from "next/link";
import { MdEmail, MdPassword } from "react-icons/md";

export default function Login() {
  return (
    <div className="bg-primary_hover h-screen w-screen">
      <div className="flex min-h-full items-center justify-center">
        <div className="w-2/5 h-1/2 p-20 bg-[#fff] rounded-xl">
          <form className=" space-y-6" action="#" method="POST">
            <div>
              <div className="relative mb-6">
                <input type="email" className="border border-gray_01 transition duration-300 hover:border-primary_hover focus:outline-none focus:border-primary_hover focus-visible:border-primary_hover text-md rounded-md block w-full p-3" placeholder="Digite o seu e-mail" />
                <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
                  <span className="material-icons-round text-primary_hover"><MdEmail className="text-primary_hover text-2xl" /></span>
                </div>
              </div>
            </div>
            <div>
              <div className="relative mb-6">
                <input type="password" className="border border-gray_01 transition duration-300 hover:border-primary_hover focus:outline-none focus:border-primary_hover focus-visible:border-primary_hover text-md rounded-md block w-full p-3" placeholder="Digite sua senha" />
                <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
                  <span className="material-icons-outlined text-primary_hover"><MdPassword className="text-primary_hover text-2xl" /></span>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-10">
              <Link href="/">
                <button
                  type="submit"
                  className="group relative flex w-64 h-10 justify-center transition duration-300 rounded-md bg-primary py-3 px-3 text-sm font-semibold text-white hover:bg-primary_hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary_hover">
                  <span className="relative inset-y-0 left-0 flex items-center justify-center text-center">ENTRAR</span>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div >
    </div >
  )
}
