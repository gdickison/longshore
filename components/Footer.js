import Image from "next/image"
import Link from "next/link"
import fb from "../public/fb_icon.png"
import insta from "../public/insta_icon.png"
import twitter from "../public/twitter_icon.png"

export default function Footer () {
  return (
    <div className="footer-container">
      <div className="footer-col footer-col1">
        <div className="footer-signup">
          <h1>Have Them Foisted Upon You</h1>
          <p>Get Jared&apos;s musings delivered to your inbox:</p>
          <form className="footer-signup-form" action="#">
            <input type="email" id="email" name="email" placeholder="Enter your email address" className="footer-signup-input"/>
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-social">
          <h1>Follow Hard After Jared</h1>
          <div className="social-options">
            <p>
              <Link href="https://www.facebook.com/jaredlongshore828" target="_blank">
                <Image src={fb} alt="Facebook Logo" width={40}/>
              </Link>
            </p>
            <p>
              <Link href="https://www.instagram.com/jaredlongshore/" target="_blank">
                <Image src={insta} alt="Instagram" width={40}/>
              </Link>
            </p>
            <p>
              <Link href="https://twitter.com/JaredLongshore" target="_blank">
                <Image src={twitter} alt="Twitter" width={40}/>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-col footer-col2">
        <h1>Other Stuff</h1>
      </div>
      <div className="footer-col footer-col3">
      <Link href='/'>
        <div className="footer-placeholder">Image</div>
      </Link>
      </div>
    </div>
  )
}