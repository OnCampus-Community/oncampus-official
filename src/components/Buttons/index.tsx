"use client";
import React, { useEffect, useState } from "react";

interface Props {
  title: string;
  style: string;
}

export const index = (props: Props) => {
  const [btnColor, setBtnColor] = useState<string>("");
  const [shadowColor, setShadowColor] = useState<string>("");

  useEffect(() => {
    if (props.style == "blue") {
      setBtnColor("#3366FF");
      setShadowColor("3xl")
    } else if (props.style == "neon") {
      setBtnColor("#C6F806");
      setShadowColor("4xl");
    } else if (props.style == "black") {
      setBtnColor("#000000");
      setShadowColor("3xl")
    } else {
      setBtnColor("#FFFFFF");
      setShadowColor("4xl")
    }
  }, []);

  return (
    <button className={`bg-[${btnColor}] px-5 py-2 rounded-full shadow-${shadowColor} font-semibold`}>
      {props.title}
    </button>
  );
};
