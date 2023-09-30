import React from "react";
import style from "./third.module.css";
import Image from "next/image";

export const Third = () => {
  return (
    <div className={style.third}>
      <div className={style.third_wrapper}>
        <div className={style.third_top}>
          <div className="w-[100%] h-[100%] m-auto flex sm:w-[90%]">
          <div className="w-[30%] h-[100%] flex items-center justify-end sm:w-[20%] sm:items-baseline">
            <div className="w-[33%] h-[20%] rounded-full border-2 border-black relative left-[30px] z-10 sm:w-[100px] sm:h-[100px] sm:mt-[50px]"></div>
            <div className="w-[33%] h-[20%] rounded-full border-2 border-black relative left-[15px] bg-[#C6F806] sm:w-[100px] sm:h-[100px]"></div>
            <div className="w-[33%] h-[20%] rounded-full border-2 border-black bg-[#3366FF] sm:w-[100px] sm:h-[100px]"></div>

          </div>
          <div className={style.third_top_line}>
            We provide world <br /> class{" "}
            <p className={style.third_top_bg}>SERVICES</p> for you{" "}
          </div>
          <div className={style.third_top_image2}>
          <Image
                className=""
                src="/Sparkles.png"
                alt="image here"
                width={250}
                height={250}
              />

          </div>
          </div>
        </div>
        <div className={style.third_middle}>
          <p className={style.middle_text}>
            From market insights to execution, we develop results-oriented
            campaigns that drive business growth and resonate with your target
            market.
          </p>
        </div>
        <div className={style.third_bottom}>
          <div className={style.main_card}>
            <div className={style.card_top}>
              <Image
                className={style.image}
                src="/boximage1.png"
                alt="image here"
                width={400}
                height={400}
              />
            </div>
            <div className={style.card_mid}>
              <p>Data Analytics</p>
            </div>
            <div className={style.card_bottom}>
              <p>
                Our innovative digital strategies cut through the noise,
                ensuring your brand&apos;s message reaches the right people.
              </p>
            </div>
          </div>
          <div className={style.main_card_2}>
            <div className={style.card_top}>
              <Image
                className={style.image}
                src="/boximage2.png"
                alt="image here"
                width={400}
                height={400}
              />
            </div>
            <div className={style.card_mid}>
              <p className={style.unique_head}>Digital Strategy</p>
            </div>
            <div className={style.card_bottom}>
              <p>
                Our innovative digital strategies cut through the noise,
                ensuring your brands message reaches the right people.
              </p>
            </div>
          </div>
          <div className={style.main_card}>
            <div className={style.card_top}>
              <Image
                className={style.image}
                src="/boximage3.png"
                alt="image here"
                width={400}
                height={400}
              />
            </div>
            <div className={style.card_mid_3}>
              <p>Multi-channel Campaigns</p>
            </div>
            <div className={style.card_bottom}>
              <p>
                Capability to plan, execute, and manage multi-channel marketing
                campaigns seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
