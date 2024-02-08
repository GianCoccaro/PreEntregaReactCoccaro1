import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../App.css';

const CartWidget = () => {
  const { quantityInCart } = useContext(CartContext);

  return (
    <div>
      <Link className="menu-link" to="/cart">
        <ShoppingCartIcon sx={{ color: 'black' }} />
        <span className="cart-number">{ quantityInCart() }</span>
      </Link>
    </div>
  )
}

export default CartWidget;