import CartWidget from "./CartWidget"
import '../App.css'

const NavBar = () => {
  return (
    <nav className="navbar">
        <h3>Huguitos fanpage</h3>
        <div>
            <button>Products</button>
            <button>About me</button>
            <button>Contact</button>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar