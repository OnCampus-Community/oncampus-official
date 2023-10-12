"use client";
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

  const [keyId, setKey] = useState<number>(1);

  useEffect(() => {
    setTimeout(() => {
      getIndex(revs.rev1.key);
      if (keyId == 1) {
        setReviews(revs.rev1);
      } else if (keyId == 2) {
        setReviews(revs.rev2);
      } else if (keyId == 3) {
        setReviews(revs.rev3);
      } else {
        setReviews(revs.rev4);
      }
    }, 5000);
  }, [keyId]);

  const getIndex = (num: number) => {
    setKey((prev)=>{
      if(prev == 4){
        return prev = 1
      }else{
        return prev +=1;
      }
    })
  };

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
