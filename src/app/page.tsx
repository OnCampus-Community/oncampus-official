
import Image from "next/image";
import { Navbar, Second, CustomButton, Fourth, Footer } from "@/components/index";

export default function Home() {
  return (
    <>
      <div className="h-[100vh] w-screen bg-[#0C0634] flex justify-center text-white">
        <div className="pt-10 flex flex-col w-[80%] justify-center">
          <Navbar />
          <div className="flex w-[80%] h-full py-10">
            <p className="text-2xl font-bold text-[#C6F806]">Welcome to onCampus</p> 
          </div>
        </div>
      </div>
      <Second />
      <Fourth />
      <Footer/>
    </>
  );
}
