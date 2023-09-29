import React from "react";
import { ProjectCard } from "@/components";

const page = () => {
  return (
    <>
      <div className="bg-gray-300">
        <div className="h-[120px] text-center py-10">
          <h1 className="text-4xl font-bold">Our Projects</h1>
        </div>
        <ProjectCard
          heading="NeuBrutalism UI"
          desc="Neubrutalism UI is a comprehensive UI kit for Flutter that incorporates the principles of Neubrutalism design. With this package, you can easily add beautiful and functional UI components to your Flutter app in a style that emphasizes simplicity and minimalism. The package includes a variety of UI components such as buttons, cards, forms, and more, each designed with a subtle shadow and rounded corners that add depth and texture to your app. You can customize the appearance of each component to fit the specific needs of your app, including changing the border radius, depth, and color. Whether you're a beginner or an experienced developer, Neubrutalism UI makes it easy to create elegant and functional UI components in Flutter that align with the principles of Neubrutalism design. With clear and concise documentation and easy installation instructions, you can start using the package in your app today."
          img="/Neu.png"
          url="https://github.com/deepraj02/neubrutalism_ui"
        />
        <ProjectCard
          heading="E2E Streams"
          desc="E2E Streams aka EzEStreamz is a Video calling and streaming platform with end-to-end encryption, With this open source project you can freely communicate with friends. Adding functionality of E2E encryption no data is stored, everything remains safe, In the first release app will get video calling feature, with future updates users would be able to share their screen, and have group video calls "
          img="/abovemoney.png"
          url="https://github.com/AdityaSingh-02/EzEStreamz"
        />
        <ProjectCard
          heading="This is Test Heading"
          desc="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself."
          img="/abovemoney.png"
        />
      </div>
    </>
  );
};

export default page;
