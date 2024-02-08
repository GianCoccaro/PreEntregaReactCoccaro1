import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
  return (
    <nav className='Navbar'>
      <Link to="/" className='Logo'><h1>HUGUITO</h1></Link>
      <ul className='Menu'>
        <li><Link className="menu-link" to="/">HOME</Link></li>
        <li><Link className="menu-link" to="/products">PRODUCTS</Link></li>
        <li><Link className="menu-link" to="/aboutus">ABOUT US</Link></li>
        <li><Link className="menu-link" to="/contact">CONTACT</Link></li>
      </ul>

      <CartWidget />

    </nav>
  )
}

export default NavBar;