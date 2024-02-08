import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState("products");
    const { category } = useParams();

    useEffect(() => {
      const productsRef = collection(db, "products");
      const q = category ? query(productsRef, where("category", "==", category)) : productsRef;

      getDocs(q)
        .then((resp) => {
          setProducts(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          );
          setTitle("Products");
        });
        
    }, [category])
     
  return (
    <div className="products-container">
      <h1>PRODUCTS</h1>

      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button component={Link} to="/category/backpacks">Backpacks</Button>
        <Button component={Link} to="/category/tshirts">T-Shirts</Button>
        <Button component={Link} to="/category/cups">Cups</Button>
        <Button component={Link} to="/products">All</Button>
      </ButtonGroup>

      <ItemList products={products} title={title} />
    </div>
  )
}

export default ItemListContainer;