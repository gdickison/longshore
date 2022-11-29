import Image from "next/image"
import Link from "next/link"
import jared from '../public/jared_heather.jpg'
import menu from '../public/menu_burger.png'

export default function NavMenu () {
  return (
    <nav className="nav-menu-container">
      <Link href='/'>
        {/* <Image src={logo} alt="Christ Church Logo" width={300}/> */}
        <div className="placeholder">
          <Image src={jared} alt="jared" className="nav-image"/>
        </div>
      </Link>
      <ul className="nav-menu-links">
        <li className="nav-menu-link">
          <Link href='/blog'>Blog</Link>
        </li>
        <li className="nav-menu-link">
          <Link href='/audio'>Audio</Link>
        </li>
        <li className="nav-menu-link">
          <Link href='/video'>Video</Link>
        </li>
        <li className="nav-menu-link">
          <Link href='/reading-list'>Reading List</Link>
        </li>
        <li className="nav-menu-link">
          <Link href='/about'>About</Link>
        </li>
        <li className="nav-menu-link">
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
      <div className="nav-menu-burger">
        <Image src={menu} alt='Menu' width={30}/>
      </div>
    </nav>
  )
}
