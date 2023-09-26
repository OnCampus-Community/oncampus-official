import React from 'react'
import './second.css'
import Image from 'next/image'
export const index = () => {
  return (
    <div className='second-container'>
      <div className="second-wrapper">
        <div className="first-half">
          <div className="first-line">
            <p className='line' >Igniting <p className="line-bag">BUSINESS GROWTH</p> <br /> through campaigns.</p>
          </div>
          <div className="first-box">
            <div className="first-half-wrapper-bg">
              
            </div>
            <div className="first-half-wrapper">
              <div className="box-wrapper">
              <div className="box-heading">
                <p className='box-heading-line'>Our Vision</p> <hr />
                
              </div>
              <div className="box-desc">
              <p className="desc">At Winfluence, we pioneer the ad agency landscape by uniting small agencies to ignite creative sparks. We amplify diverse talents, reshaping advertising dynamics. <br /><br /> 

Our unique teamwork approach unlocks each agency's strengths, crafting attention-grabbing campaigns that redefine success.</p>
              </div>
              <div className="box-button">
                <button className='box-end-button'>Read Our Mission</button>
              </div>
              </div>

            </div>
            

          </div>
        </div>
        <div className="second-half">
          <div className="second-top">
          <Image className='image1' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDw0NDw0PDQ0NDQ0NDw8NDw0NFREWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NEg4PFSsZFRkrKysrKysrKysrKys3KystLSsrKysrKysrKy0tKysrKysrKysrKysrKysrKysrKysrK//AABEIAKwBJgMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIRABAQEAAQMEAwAAAAAAAAAAAAERIWGBoQIxcfAiQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7iAAACW+3Hf+KAAAAJJgKAAAAAAAAAAAAAAAAz6rZfTkt25bx+My3fEndoAAAMAAAAACgAAAAAAAAAAAAAAAAAAACbz7d1AAAAAAAAAAACgAAAAAAAAAaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAABL08qAAAAAEAAAAAAAAAAAAAAAAANABL96qAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAABLAUAAEBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAIoAAAAAAAAAAAACYoAAAACSqAAAAAAAAAAAAAAAAAAAAAAlgCgAAAAAJd/XHzN4UABKCgAAAAAAAAAAlBRMUAAAAAAAAEqgAAAAD/2Q==" alt="image here" width={400} height={400}/>
          </div>
          <div className="second-bottom"> <Image className='image2' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDw0NDw0PDQ0NDQ0NDw8NDw0NFREWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NEg4PFSsZFRkrKysrKysrKysrKys3KystLSsrKysrKysrKy0tKysrKysrKysrKysrKysrKysrKysrK//AABEIAKwBJgMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIRABAQEAAQMEAwAAAAAAAAAAAAERIWGBoQIxcfAiQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7iAAACW+3Hf+KAAAAJJgKAAAAAAAAAAAAAAAAz6rZfTkt25bx+My3fEndoAAAMAAAAACgAAAAAAAAAAAAAAAAAAACbz7d1AAAAAAAAAAACgAAAAAAAAAaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAABL08qAAAAAEAAAAAAAAAAAAAAAAANABL96qAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAABLAUAAEBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAIoAAAAAAAAAAAACYoAAAACSqAAAAAAAAAAAAAAAAAAAAAAlgCgAAAAAJd/XHzN4UABKCgAAAAAAAAAAlBRMUAAAAAAAAEqgAAAAD/2Q==" alt="image here" width={400} height={400}/><div className="dot1"></div><div className="dot2"></div><div className="dot3"></div><div className="dot4"></div><div className="dot5"></div><p className="image-text">Marketing</p></div>
          
        </div>
      </div>
    </div>
  )
}