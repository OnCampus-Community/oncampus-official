import React from 'react'
import style from './footer.module.css'
import Image from "next/image";

export const index = () => {
  return (
    <div className={style.footer}>
        <div className={style.footer_wrapper}>
            <div className={style.footer_left}> © 2023 Winfulence. All rights reserved</div>
            <div className={style.footer_middle}>
            <Image
                  className={style.image1}
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDw0NDw0PDQ0NDQ0NDw8NDw0NFREWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NEg4PFSsZFRkrKysrKysrKysrKys3KystLSsrKysrKysrKy0tKysrKysrKysrKysrKysrKysrKysrK//AABEIAKwBJgMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIRABAQEAAQMEAwAAAAAAAAAAAAERIWGBoQIxcfAiQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7iAAACW+3Hf+KAAAAJJgKAAAAAAAAAAAAAAAAz6rZfTkt25bx+My3fEndoAAAMAAAAACgAAAAAAAAAAAAAAAAAAACbz7d1AAAAAAAAAAACgAAAAAAAAAaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAABL08qAAAAAEAAAAAAAAAAAAAAAAANABL96qAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAABLAUAAEBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAIoAAAAAAAAAAAACYoAAAACSqAAAAAAAAAAAAAAAAAAAAAAlgCgAAAAAJd/XHzN4UABKCgAAAAAAAAAAlBRMUAAAAAAAAEqgAAAAD/2Q=="
                  alt="image here"
                  width={200}
                  height={200}/>
            <p className={style.name}>Winfluence</p>
                
            </div>
            <div className={style.footer_right}>
                <div className={style.logo}></div>
                <div className={style.logo}></div>
                <div className={style.logo}></div>
            </div>
           
        </div>
      
    </div>
  )
}
