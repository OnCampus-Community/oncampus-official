import React from "react";
import Image from "next/image";

interface Props{
    alt : string;
    image: string;
}

export const MobileImageCard = (props: Props) => {
  return (
    <div className={`w-[100%] h-auto px-5 py-2 rounded-2xl `}>
      <Image
        src={props.image}
        alt={props.alt}
        height={1000}
        width={1000}

        className="h-full w-full rounded-2xl"
        style={{ boxShadow: "13px 15px #C6F806" }}
      />
    </div>
  );
};

