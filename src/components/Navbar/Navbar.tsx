import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Inclusive_Sans} from '@next/font/google'

const customFont = Inclusive_Sans({subsets:["latin"], weight:"400"});

export const Navbar = () => {
  return (
    <>
      <div className={`${customFont.className} flex flex-row space-y-3 text-white w-[80%] justify-between items-center`}>
        <Image
          src={"/FINALLOGO.png"}
          height={80}
          width={80}
          alt="oncampus-logo"
        />
        <div className="right flex border-[#C6F806] border-2 h-16 w-[70%] rounded-full justify-between items-center px-10 cursor-pointer">
          <p>Services</p>
          <p>Work</p>
          <p>Join Comm</p>
          <p>about us</p>
        </div>
        {/* <h2 className="text-xl font-bold -ml-16">onCampus Community</h2> */}
      </div>
    </>
  );
};

export default Navbar;
