import NavMenu from "./NavMenu";
import Footer from "./Footer";

export default function Layout ({children}) {
  return (
    <div className="layout">
      <NavMenu/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}