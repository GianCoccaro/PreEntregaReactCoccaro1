import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import ItemCount from './ItemCount';
import { useContext, useState } from "react";
import { CartContext } from '../context/CartContext';
import '../App.css';

const Item = ( {product} ) => {
  const { id, title, image, price, stock} = product;
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    quantity > 1 && setQuantity(quantity - 1)
  };
  
  const handleIncrement = () => {
    quantity < stock && setQuantity(quantity + 1)
  };

  const { addToCart } = useContext(CartContext);

  return (
    <div className="product">
        <div>
            <Card className="product-card">
              <Link to={`/products/${id}`}>
                <CardMedia
                  component="img"
                  height="300"
                  image={image?.path}
                  title={title}
                  alt={title}
                  className="product-image"
                />
              <CardContent sx={{ paddingBottom: '0' }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black', fontSize: '20px', textDecoration: 'none' }}>
                  {title}
                </Typography>
              </CardContent>
            </Link>
              <CardContent>
                <Typography variant="body2" color="text.secondary" className="product-price">
                  Price: ${price}
                </Typography>
              </CardContent>
              <CardActions>
                <ItemCount className="product-counter" 
                  quantity={quantity}
                  handleDecrement={handleDecrement}
                  handleIncrement={handleIncrement}
                  handleAdd={() => { addToCart(product, quantity) }}
                />
              </CardActions>
            </Card>
        </div>
    </div>
  )
}

export default Item;