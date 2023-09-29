"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  image: string;
  alt: string;
  size: string;
}

export const ImageCard = (props: Props) => {
  const [size, setSize] = useState<{ height: string; width: string }>({
    height: "200px",
    width: "300px",
  });

  useEffect(()=> {
      if(props.size == 'normal')setSize({height: "200px", width:"300px"})
      else if(props.size == 'large')setSize({height:"240px", width:"340px"})

  },[props.size])

  return (
    <div className="flex">
      <div className="flex rounded-2xl bg-[#C6F806] -rotate-12" style={{height: size.height, width:size.width }}></div>
      <Image
        src={props.image}
        alt={props.alt}
        height={1000}
        width={1000}
        className="-translate-x-[270px] translate-y-3 rounded-2xl border-4 border-yellow-200"
        style={{ height: size.height, width: "auto" }}
      />
    </div>
  );
};
