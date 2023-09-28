import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";

const customFont = Roboto({ subsets: ["latin"], weight: "400" });

export const Navbar = () => {
  return (
    <>
      <div
        className={`${customFont.className} flex flex-col-reverse md:pt-0 md:flex-row space-y-3 text-white md:w-[80%] justify-between items-center `}>
        <Image
          src={"/FINALLOGO.png"}
          height={80}
          width={80}
          alt="oncampus-logo"
          className="mt-10 md:pt-0"
        />
        <div className="right flex border-[#C6F806] border-2 h-16 w-[100%] md:w-[70%] rounded-full justify-between items-center px-4  md:px-10 cursor-pointer">
          <p>Services</p>
          <p>Work</p>
          <p>Join Comm</p>
          <p>about us</p>
        </div>
      </div>
    </>
  );
};
