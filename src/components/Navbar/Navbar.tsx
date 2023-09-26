import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <div className="flex flex-col space-y-3 text-white justify-center items-center">
        <div className="right flex bg-[#171717] h-16 w-[90%] rounded-xl justify-between items-center px-10 cursor-pointer">
          <p>Services</p>
          <p>Work</p>
          <Image
            src={"/FINALLOGO.png"}
            height={80}
            width={80}
            alt="oncampus-logo"
          />
          <p>Join Comm</p>
          <p>about us</p>
        </div>
        <h2 className="text-xl font-bold -ml-16">onCampus Community</h2>
      </div>
    </>
  );
};

export default Navbar;
