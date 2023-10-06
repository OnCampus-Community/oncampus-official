import React from "react";
import style from "./second.module.css";
import Image from "next/image";
import { CustomButton } from "@/components/index";

export const Second = () => {
  return (
    <div className={style.second_container}>
      <div className={style.second_wrapper}>
        <div className={style.first_half}>
          <div className={style.first_line}>
            <div className={style.line}>
              Igniting <p className={style.line_bag}>BUSINESS_GROWTH</p> <br />{" "}
              through campaigns.
            </div>
          </div>
          <div className={style.first_box}>
            <div className={style.first_half_wrapper}>
              <div className={style.box_wrapper}>
                <div className={style.box_heading}>
                  <p className={style.box_heading_line}>Our Vision</p>
                </div>
                <div className={style.box_desc}>
                  <p className={style.desc}>
                    We provide a supportive and inclusive environment where
                    individuals can start or continue their journey in open
                    source development. Our work involves identifying projects
                    that align with our mission and providing resources and
                    support to help them succeed.
                    <br />
                    <br />
                    We believe that open source development is not just about
                    writing code, but also about creating a positive impact on
                    the world and supporting the growth of our student developer
                    community.
                  </p>
                </div>
                <div className={style.box_button}>
                  <CustomButton title="Read our Mission" style="neon" url="https://github.com/sponsors/OnCampus-Community" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.second_half}>
          <div className={style.second_top}>
            <Image
              className={style.image1}
              src="/abovemoney.png"
              alt="image here"
              width={400}
              height={400}
            />
          </div>
          <div className={style.second_bottom}>
            {" "}
            <Image
              className={style.image2}
              src="/money.png"
              alt="image here"
              width={400}
              height={400}
            />
            <div className={style.dot1}></div>
            <div className={style.dot2}></div>
            <div className={style.dot3}></div>
            <div className={style.dot4}></div>
            <div className={style.dot5}></div>
            <p className={style.image_text}>Marketing</p>
          </div>
        </div>
      </div>

      
    </div>
  );
};
