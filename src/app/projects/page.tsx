import React from "react";
import { ProjectCard } from "@/components";

const page = () => {
  return (
    <>
    
      <div className="bg-gray-300">
      <div className="h-[120px] text-center py-10"><h1 className="text-4xl font-bold">Our Projects</h1></div>
        <ProjectCard heading="This is Test Heading" desc="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself." img="/abovemoney.png"/>
        <ProjectCard heading="This is Test Heading" desc="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself." img="/abovemoney.png"/>
        <ProjectCard heading="This is Test Heading" desc="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself." img="/abovemoney.png"/>
      </div>
    </>
  );
};

export default page;
