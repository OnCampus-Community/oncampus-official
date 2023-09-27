import React from 'react'
import './fourth.css'
import Image from 'next/image'

export const index = () => {
  return (
    <div className='fourth'>
        <div className="fourth-wrapper">
            <div className="fourth-one">
                <div className="dot-box">
                    <div className="dot-1 dots"></div>
                    <div className="dot-2 dots"></div>
                    <div className="dot-3 dots"></div>
                </div>
            </div>
            <div className="fourth-two">
                <div className="two-text">
                    <p className="two-line">Hear What Our <br /><p className="two-line-bg">CLIENTS</p> Have To Say.</p>
                </div>
                <div className="two-image"></div>
            </div>
            <div className="fourth-three">
            At Winfluence our clients' success stories speak volumes. Don't just take our word for it – read what our clients have to say about their experience partnering with us."
            </div>
            <div className="fourth-four">
                <div className="fourth-four-wrapper">
                    <div className="four-top">
                        <div className="four-top-image">
                        <Image className='image-1' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDw0NDw0PDQ0NDQ0NDw8NDw0NFREWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NEg4PFSsZFRkrKysrKysrKysrKys3KystLSsrKysrKysrKy0tKysrKysrKysrKysrKysrKysrKysrK//AABEIAKwBJgMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIRABAQEAAQMEAwAAAAAAAAAAAAERIWGBoQIxcfAiQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7iAAACW+3Hf+KAAAAJJgKAAAAAAAAAAAAAAAAz6rZfTkt25bx+My3fEndoAAAMAAAAACgAAAAAAAAAAAAAAAAAAACbz7d1AAAAAAAAAAACgAAAAAAAAAaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAABL08qAAAAAEAAAAAAAAAAAAAAAAANABL96qAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAABLAUAAEBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAIoAAAAAAAAAAAACYoAAAACSqAAAAAAAAAAAAAAAAAAAAAAlgCgAAAAAJd/XHzN4UABKCgAAAAAAAAAAlBRMUAAAAAAAAEqgAAAAD/2Q==" alt="image here" width={200} height={200}/>
                        </div>
                        <div className="four-top-text">
                        <p className="four-top-text">John Doe <br />Marketing Director, Company A</p>
                        </div>
                    
                    
                    </div>
                    
                    <div className="four-bottom">
                        <div className="four-bottom-wrapper">
                            <p className="four-bottom-text">Working with Winfluence was a game-changer for us. Their innovative digital strategies propelled our brand to new heights, resulting in a 30% increase in website traffic</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
        
      
    </div>
  )
}


