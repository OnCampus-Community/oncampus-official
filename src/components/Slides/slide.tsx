import style from "../Fourth/fourth.module.css";
import Image from "next/image";

import React from "react";

export interface Props {
    im: string;
    name: string;
    position: string;
    text: string;
    key?: number;
}

export const slide = (props: Props) => {
  return (
    <>
      <div className={style.fourthfour}>
        <div className={style.fourthfourwrapper}>
          <div className={style.fourtop}>
            <div className={style.fourtopimage}>
              <Image
                className={style.image1}
                src={props.im}
                alt="image here"
                width={200}
                height={200}
              />
            </div>
            <div className={style.fourtoptext}>
              <p className={style.fourtoptext}>
                {props.name} <br />
                {props.position}
              </p>
            </div>
          </div>

          <div className={style.fourbottom}>
            <div className={style.fourbottomwrapper}>
              <p className={style.fourbottomtext}>
                {props.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
