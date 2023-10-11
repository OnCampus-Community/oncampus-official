import React, { useEffect, useState } from "react";
import style from "./fourth.module.css";
import Image from "next/image";
import { slide as Slide, Props as IRevs } from "../Slides/slide";
import revs from "./reviews.json";

export const Fourth = () => {
  const [reviews, setReviews] = useState<IRevs>({
    im: "/person.png",
    name: "John Doe",
    position: "marketing",
    text: "Hello world",
  });

  useEffect(() => {
    setTimeout(() => {
      setReviews(revs.rev1);
    }, 3000);
  }, []);

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
        <Slide
          im={reviews.im}
          name={reviews.name}
          position={reviews.position}
          text={reviews.text}
        />
      </div>
    </div>
  );
};
