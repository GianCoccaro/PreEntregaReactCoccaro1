import CartWidget from "./CartWidget"
import '../App.css'
import { Link } from "react-router-dom/dist"

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo"><h3>Huguitos fanpage</h3></Link>
      
      <ul className='menu'>
        <li><Link className="menu-link" to="/">HOME</Link></li>
        <li><Link className="menu-link" to="/products">PRODUCTS</Link></li>
        <li><Link className="menu-link" to="/aboutme">ABOUT ME</Link></li>
        <li><Link className="menu-link" to="/contact">CONTACT</Link></li>
      </ul>
      
      <CartWidget />
    </nav>
  )
}

export default NavBar