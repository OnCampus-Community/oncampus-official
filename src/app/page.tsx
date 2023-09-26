import Image from "next/image";
import { Navbar, Second, CustomButton } from "@/components/index";

export default function Home() {
  return (
    <>
      <div className="h-[100vh] w-screen bg-[#0C0634] flex justify-center">
        <div className="pt-10">
          <Navbar />
        </div>
      </div>
      {/* <Second /> */}
    </>
  );
}
