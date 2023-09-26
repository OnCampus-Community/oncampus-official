"use client";
import React, { useEffect, useState } from "react";

interface Props {
  title: string;
  style: string;
}

export const index = (props: Props) => {
  const [btnColor, setBtnColor] = useState<string>("3366FF");
  const [shadowColor, setShadowColor] = useState<string>("3px 5px rgba(255, 255, 255, 1)");

  useEffect(() => {
    if (props.style == "blue") {
      setBtnColor("#3366FF");
      setShadowColor("3px 5px rgba(255, 255, 255, 1)")
    } else if (props.style == "neon") {
      setBtnColor("#C6F806");
      setShadowColor("3px 5px rgba(0, 0, 0, 1)");
    } else if (props.style == "black") {
      setBtnColor("#000000");
      setShadowColor("3px 5px rgba(255, 255, 255, 1)")
    } else {
      setBtnColor("#FFFFFF");
      setShadowColor("3px 5px rgba(0, 0, 0, 1)")
    }
  }, [props.style]);

  return (
    <button className={`px-5 py-2 rounded-full font-semibold`} style={{background:`${btnColor}` , boxShadow: `${shadowColor}`}}>
      {props.title}
    </button>
  );
};
