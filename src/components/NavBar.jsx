import CartWidget from "./CartWidget"
import '../App.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="Navbar">
      <Link to="/" className="Logo"><h3>Huguitos fanpage</h3></Link>
      
      <ul className='Menu'>
        <NavLink to={'/category/t-shirts'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>T-shirts</NavLink>
        <NavLink to={'/category/backpacks'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Backpacks</NavLink>
        <NavLink to={'/category/cups'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Cups</NavLink>
      </ul>
      
      <CartWidget />
    </nav>
  )
}

export default NavBar