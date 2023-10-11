import style from "../Fourth/fourth.module.css";
import Image from "next/image";

import React from "react";

export const slide = () => {
  return (
    <>
      <div className={style.fourthfour}>
        <div className={style.fourthfourwrapper}>
          <div className={style.fourtop}>
            <div className={style.fourtopimage}>
              <Image
                className={style.image1}
                src="/client.png"
                alt="image here"
                width={200}
                height={200}
              />
            </div>
            <div className={style.fourtoptext}>
              <p className={style.fourtoptext}>
                John Doe <br />
                Marketing Director, Company A
              </p>
            </div>
          </div>

          <div className={style.fourbottom}>
            <div className={style.fourbottomwrapper}>
              <p className={style.fourbottomtext}>
                Working with Winfluence was a game-changer for us. Their
                innovative digital strategies propelled our brand to new
                heights, resulting in a 30% increase in website traffic
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
