import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  heading: string;
  desc: string;
  url?: string | "/";
  img?: string | "";
}

export const ProjectCard = (props: Props) => {
  return (
    <div className="h-screen bg-gray-300">
      <div
        className="h-96 w-[90%] mx-auto rounded-2xl bg-[#3366FF] p-10 flex justify-center items-center"
        style={{ boxShadow: "13px 15px black" }}>
        <h2>{props.heading}</h2>
        <Link href={props.url || " "}>
          <Image src={props.img!} alt="image" height={100} width={100} />
        </Link>
      </div>
    </div>
  );
};
