import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "../components/ItemCount";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

const ItemDetail = ({ item }) => {
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
      quantity > 1 && setQuantity(quantity - 1)
    };
    
    const handleIncrement = () => {
      quantity < item.stock && setQuantity(quantity + 1)
    };
    
    const handleAdd = () => {
      if (quantity > 0) {
        addItem(item, quantity);
      } else {
        console.log("Please select at least one product to add to the cart");
      }
    };

  return (
    <Card>
      <CardMedia
        sx={{ height: "400px", width:"400px" }}
        image={item.image?.path}
        title={item.title}
        alt={item.description}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description: {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {item.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${item.price}
        </Typography>
        <CardActions>
          <ItemCount
            quantity={quantity}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            handleAdd={() => { addToCart(item, quantity) }}
          />
        </CardActions>
        
      </CardContent>
    </Card>
  )
}

export default ItemDetail;