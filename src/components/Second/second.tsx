import React from "react";
import style from './second.module.css'
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
                    At Winfluence, we pioneer the ad agency landscape by uniting
                    small agencies to ignite creative sparks. We amplify diverse
                    talents, reshaping advertising dynamics. <br />
                    <br />
                    Our unique teamwork approach unlocks each agency
                    strengths, crafting attention_grabbing campaigns that
                    redefine success.
                  </p>
                </div>
                <div className={style.box_button}>
                  <CustomButton title="Read our Mission" style="neon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.second_half}>
          <div className={style.second_top}>
            <Image
              className={style.image1}
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDw0NDw0PDQ0NDQ0NDw8NDw0NFREWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NEg4PFSsZFRkrKysrKysrKysrKys3KystLSsrKysrKysrKy0tKysrKysrKysrKysrKysrKysrKysrK//AABEIAKwBJgMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIRABAQEAAQMEAwAAAAAAAAAAAAERIWGBoQIxcfAiQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7iAAACW+3Hf+KAAAAJJgKAAAAAAAAAAAAAAAAz6rZfTkt25bx+My3fEndoAAAMAAAAACgAAAAAAAAAAAAAAAAAAACbz7d1AAAAAAAAAAACgAAAAAAAAAaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAABL08qAAAAAEAAAAAAAAAAAAAAAAANABL96qAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAABLAUAAEBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAIoAAAAAAAAAAAACYoAAAACSqAAAAAAAAAAAAAAAAAAAAAAlgCgAAAAAJd/XHzN4UABKCgAAAAAAAAAAlBRMUAAAAAAAAEqgAAAAD/2Q=="
              alt="image here"
              width={400}
              height={400}
            />
          </div>
          <div className={style.second_bottom}>
            {" "}
            <Image
              className={style.image2}
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDw0NDw0PDQ0NDQ0NDw8NDw0NFREWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NEg4PFSsZFRkrKysrKysrKysrKys3KystLSsrKysrKysrKy0tKysrKysrKysrKysrKysrKysrKysrK//AABEIAKwBJgMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIRABAQEAAQMEAwAAAAAAAAAAAAERIWGBoQIxcfAiQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7iAAACW+3Hf+KAAAAJJgKAAAAAAAAAAAAAAAAz6rZfTkt25bx+My3fEndoAAAMAAAAACgAAAAAAAAAAAAAAAAAAACbz7d1AAAAAAAAAAACgAAAAAAAAAaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAABL08qAAAAAEAAAAAAAAAAAAAAAAANABL96qAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAABLAUAAEBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAIoAAAAAAAAAAAACYoAAAACSqAAAAAAAAAAAAAAAAAAAAAAlgCgAAAAAJd/XHzN4UABKCgAAAAAAAAAAlBRMUAAAAAAAAEqgAAAAD/2Q=="
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
