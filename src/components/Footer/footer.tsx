import React from "react";
import style from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_wrapper}>
        <div className={style.footer_left}>
          {" "}
          © 2023 onCampus. All rights reserved
        </div>
        <div className={style.footer_middle}>
          <Image
            className={style.image1}
            src={"/FINALLOGO.png"}
            alt="image here"
            width={200}
            height={200}
          />
          <p className={style.name}>onCampus Community</p>
        </div>
        <div className={style.footer_right}>
          <Link href={"https://www.instagram.com/oncampus_official/"} target="__blank" ><Image src={"/insta.png"} width={100} height={100} alt="so" className={style.logo} /></Link>
          <Link href={"https://github.com/OnCampus-Community"} target="__blank"><Image src={"/github.png"} width={100} height={100} alt="so" className={style.logo} /></Link>
          <Link href={"https://discord.gg/nsam6YzE8R"}><Image src={"/discord.png"} width={100} height={100} alt="so" className={style.logo} /></Link>
        </div>
      </div>
    </div>
  );
};
