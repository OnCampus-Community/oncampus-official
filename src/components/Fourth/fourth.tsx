import React from "react";
import style from "./fourth.module.css";
import Image from "next/image";
import { slide as Slide } from "../Slides/slide";

export const Fourth = () => {
  return (
    <div className={style.fourth}>
      <div className={style.fourthwrapper}>
        <div className={style.fourthone}>
          <div className={style.dotbox}>
            <div className={style.dots}></div>
            <div className={style.dots}></div>
            <div className={style.dots}></div>
          </div>
        </div>
        <div className={style.fourthtwo}>
          <div className={style.twotext}>
            <div className={style.twoline}>
              Hear What Our <br />
              <p className={style.twolinebg}>CLIENTS</p> Have To Say.
            </div>
          </div>
          <div className={style.twoimage}>
            <Image
              className={style.image2}
              src="/person.png"
              alt="image here"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className={style.fourththree}>
          At Winfluence our clients success stories speak volumes. Dont just
          take our word for it – read what our clients have to say about their
          experience partnering with us.
        </div>
        <Slide im="/person.png" name="John doe" position="marketing" text="Jello" />
      </div>
    </div>
  );
};
