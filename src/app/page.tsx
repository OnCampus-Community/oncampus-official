import {
  Navbar,
  Second,
  Third,
  Fourth,
  CustomButton,
  ImageCard,
  Footer,
} from "@/components";

import { Anton } from "next/font/google";

const antonFont = Anton({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <div
        className={` ${antonFont.className} h-[100vh] w-screen bg-[#0C0634] flex justify-center text-white `}>
        <div className="pt-10 flex flex-col w-[90%] justify-center">
          <Navbar />
          <div className="flex flex-row h-full py-10 w-[100%]">
            <div>
              <p className="text-3xl font-bold text-[#C6F806] pt-10 mx-auto">
                Welcome to onCampus
              </p>
              <div
                className="text-4xl font-bold text-white py-10"
                style={{ lineHeight: "80px" }}>
                <span className="inline-block text-black rounded-2xl bg-[#C6F806] px-5  -rotate-3">
                  <p>OnCampus</p>
                </span>{" "}
                <span className="px-2">
                  is a community for developers who want to learn, grow, and
                  connect with other like-minded individuals. world of
                  technology.
                </span>
              </div>
              <CustomButton style="blue" title="Join Us" />
            </div>
            <div className="flex w-screen">
              <ImageCard alt="Lo" image="/Test.jpg" size="normal" />
            </div>
          </div>
        </div>
      </div>
      <Second />
      <Third />
      <Fourth />
      <Footer />
    </>
  );
}
