import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../App.css';
// import cart from 'cart.svg'

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
      <img className='CartImg' src={cart} alt="cart-widget" />
      { totalQuantity }
    </Link>
  )
}

export default CartWidget;