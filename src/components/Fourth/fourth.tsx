import React from "react";
import style from "./fourth.module.css";
import Image from "next/image";

export const Fourth = () => {
  return (
    <div className={style.fourth}>
      <div className={style.fourthwrapper}>
        <div className={style.fourthone}>
          <div className={style.dotbox}>
            <div className={ style.dots}></div>
            <div className={ style.dots}></div>
            <div className={ style.dots}></div>
          </div>
        </div>
        <div className={style.fourthtwo}>
          <div className={style.twotext}>
            <div className={style.twoline}>
              Hear What Our <br />
              <p className={style.twolinebg}>CLIENTS</p> Have To Say.
            </div>
          </div>
          <div className={style.twoimage}></div>
        </div>
        <div className={style.fourththree}>
          At Winfluence our clients success stories speak volumes. Dont just
          take our word for it – read what our clients have to say about their
          experience partnering with us.
        </div>
        <div className={style.fourthfour}>
          <div className={style.fourthfourwrapper}>
            <div className={style.fourtop}>
              <div className={style.fourtopimage}>
                <Image
                  className={style.image1}
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDw0NDw0PDQ0NDQ0NDw8NDw0NFREWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NEg4PFSsZFRkrKysrKysrKysrKys3KystLSsrKysrKysrKy0tKysrKysrKysrKysrKysrKysrKysrK//AABEIAKwBJgMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIRABAQEAAQMEAwAAAAAAAAAAAAERIWGBoQIxcfAiQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7iAAACW+3Hf+KAAAAJJgKAAAAAAAAAAAAAAAAz6rZfTkt25bx+My3fEndoAAAMAAAAACgAAAAAAAAAAAAAAAAAAACbz7d1AAAAAAAAAAACgAAAAAAAAAaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAABL08qAAAAAEAAAAAAAAAAAAAAAAANABL96qAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAABLAUAAEBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAIoAAAAAAAAAAAACYoAAAACSqAAAAAAAAAAAAAAAAAAAAAAlgCgAAAAAJd/XHzN4UABKCgAAAAAAAAAAlBRMUAAAAAAAAEqgAAAAD/2Q=="
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
      </div>
    </div>
  );
};
