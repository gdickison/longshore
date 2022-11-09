import Image from "next/image"
import bookCover from "../public/book_cover.jpg"
import logo from "../public/logo.webp"

export default function PromotionBlock () {
  return (
    <>
      <div className="promotion-block-container">
        <h1>Books</h1>
        <div className="promotion-items">
          <div className="promotion-item">
            <Image src={bookCover} alt="book cover" width={180}/>
            <div>
              <h2>Cool Book</h2>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptate perspiciatis eius nulla quis fugit repudiandae alias excepturi deserunt laudantium doloremque consequatur ut? Temporibus odit voluptates ad expedita nostrum delectus?</h4>
            </div>
          </div>
          <div className="promotion-item">
            <Image src={bookCover} alt="book cover" width={180}/>
            <div>
              <h2>Cool Book</h2>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptate perspiciatis eius nulla quis fugit repudiandae alias excepturi deserunt laudantium doloremque consequatur ut? Temporibus odit voluptates ad expedita nostrum delectus?</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="promotion-block-container">
        <h1>Promoted</h1>
        <div className="promoted-items">
          <div className="promoted-item">
            <Image src={logo} alt="book cover" width={300}/>
          </div>
          <div className="promoted-item">
            <Image src={logo} alt="book cover" width={300}/>
          </div>
          <div className="promoted-item">
            <Image src={logo} alt="book cover" width={300}/>
          </div>
          <div className="promoted-item">
            <Image src={logo} alt="book cover" width={300}/>
          </div>
          <div className="promoted-item">
            <Image src={logo} alt="book cover" width={300}/>
          </div>
        </div>
      </div>
    </>
  )
}