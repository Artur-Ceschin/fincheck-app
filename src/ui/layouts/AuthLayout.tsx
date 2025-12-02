import Illustration from "../../assets/illustration.png";
import { Logo } from "../components/Logo";


export function AuthLayout() {
  return (
    <div className="flex flex-col md:flex-row w-full h-full min-h-screen">
      <div className="w-full md:w-1/2 h-full flex items-center justify-center p-4 md:p-0">
        <Logo className="h-6 text-gray-500" />
      </div>


      <div className="hidden md:flex md:w-1/2 h-full items-center justify-center p-8 relative">
        <img src={Illustration} alt="Illustration"
          className="object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-[32px]"
        />

        <div className="w-full max-w-[656px] bottom-8 bg-white h-auto p-10 absolute rounded-b-[32px]">
          <Logo className="text-teal-900 h-8" />
          <p className="text-gray-700 text-xl font-medium mt-6">
            Manage your personal finances simply with fincheck, and the best part, it's completely free!
          </p>
        </div>
      </div>
    </div>
  )
}
