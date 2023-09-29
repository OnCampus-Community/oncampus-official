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
    <div className="h-[500px] bg-gray-300">
      <div
        className="h-96 w-[90%] mx-auto rounded-2xl bg-[white] p-10 flex justify-center items-center border-black border-solid border-2"
        style={{ boxShadow: "13px 15px black" }}>

         {/* BORDER COLOR NEEDS TO BE VARIFIED ------------------CHECK PLEASE------------------- */}


          <div className="h-[100%] w-[70%] flex flex-col border-r-2 border-black text-black">
            <div className="h-[30%] w-[100%] font-bold text-4xl px-10"><h2>{props.heading}</h2></div>
            <div className="h-[70%] w-[100%] overflow-hidden px-10"><h2>{props.desc}</h2></div>
          </div>
          <div className="h-[100%] w-[30%]">
          <Link href={props.url || " "}>
              <Image src={props.img!} alt="image" height={350} width={350} className="m-auto"/>
          </Link> 
          </div>
      </div>
    </div>
  );
};

{/* <h2>{props.heading}</h2>
<Link href={props.url || " "}>
  <Image src={props.img!} alt="image" height={100} width={100} />
</Link> */}