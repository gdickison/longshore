import Image from "next/image"
import Link from "next/link"
// import logo from '../public/logo.png'
import menu from '../public/menu_burger.png'

export default function NavMenu () {
  return (
    <nav className="nav-menu-container">
      <Link href='/'>
        {/* <Image src={logo} alt="Christ Church Logo" width={300}/> */}
        <div className="placeholder">Image</div>
      </Link>
      <ul className="nav-menu-links">
        <li className="nav-menu-link">
          <Link href='#'>First</Link>
        </li>
        <li className="nav-menu-link">
          <Link href='#'>Second</Link>
        </li>
        <li className="nav-menu-link">
          <Link href='#'>Third</Link>
        </li>
        <li className="nav-menu-link">
          <Link href='#'>Fourth</Link>
        </li>
        <li className="nav-menu-link">
          <Link href='#'>Fifth</Link>
        </li>
        <li className="nav-menu-link">
          <Link href='#'>Contact</Link>
        </li>
      </ul>
      <div className="nav-menu-burger">
        <Image src={menu} alt='Menu' width={30}/>
      </div>
    </nav>
  )
}
