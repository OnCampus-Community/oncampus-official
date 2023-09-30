"use client";
import {
  Navbar,
  Second,
  Third,
  Fourth,
  CustomButton,
  ImageCard,
  Footer,
  Fifth,
  MobileImageCard,
} from "@/components/index";
import style from "./page.module.css";
import { Russo_One } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";

const antonFont = Russo_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [disordMemberCount, setDiscordMemberCount] = useState<number>(0);

  const getDiscordMemberCount = (serverUrl: string) => {
    axios
      .get(
        `https://discord.com/api/v9/invites/${serverUrl}?with_counts=true&with_expiration=true`
      )
      .then((res) => {
        setDiscordMemberCount(res.data.approximate_member_count);
      });
  };

  useEffect(() => {
    getDiscordMemberCount("nsam6YzE8R");
  }, []);

  return (
    <>
      <div
        className={` ${antonFont.className} md:h-[1000px] md:w-screen bg-[#0C0634] flex justify-center text-white `}>
        <div className=" md:pt-1 flex flex-col w-[95%] md:w-[90%] justify-center">
          <Navbar />
          <div className="flex flex-col md:flex-row h-full md:py-10 w-[100%]">
            {/* Landing page text----------------------------------- */}

            <div className="flex flex-col space-y-5 md:justify-center items-center md:inline pb-10 md:h-auto ">
              <p className="text-2xl md:text-3xl font-bold text-[#C6F806] pt-4 md:pt-10 mx-auto flex">
                Welcome to onCampus
              </p>
              <div
                className={`${style.Landing_text} text-3xl md:text-5xl font-bold text-white py-10`}>
                <span className="inline-block text-black rounded-2xl bg-[#C6F806] px-5  -rotate-3">
                  <p>OnCampus</p>
                </span>{" "}
                <span className="px-2">
                  is a community for developers who want to learn, grow, and
                  connect with other like-minded individuals.
                </span>
              </div>
              <CustomButton
                style="blue"
                title="Join Discord"
                url="https://discord.gg/nsam6YzE8R"
              />
              <div>
                <CustomButton
                  style="blue"
                  title={`Discord Members ${disordMemberCount?.toString()}`}
                />
              </div>
              {/* Image Card for mobile view-------------------------- */}
              <div className="flex flex-col md:hidden w-[100%] justify-center items-center space-y-7">
                <MobileImageCard alt="Event" image="/Im1.jpg" />
                <MobileImageCard alt="Event" image="/Im2.jpg" />
                <MobileImageCard alt="Event" image="/Im3.jpg" />
              </div>
            </div>

            {/* Image Cards --------------------------------------- */}

            <div className="hidden md:flex flex-col w-screen space-y-8 justify-center items-center">
              <div>
                <ImageCard alt="Deepraj-Image" image="/Im1.jpg" size="normal" />
              </div>
              <div className="ml-32 rotate-2">
                <ImageCard alt="Aditya" image="/Im2.jpg" size="large" />
              </div>
              <div className="">
                <ImageCard alt="Event" image="/Im3.jpg" size="normal" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="section2">
        <Second />
      </div>
      <Third />
      <Fourth />
      <Fifth/>
      <Footer />
    </>
  );
}
