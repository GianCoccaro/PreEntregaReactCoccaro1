import '../App.css'
import { useEffect, useState } from 'react';
import { getProducts } from "";
import ItemList from "../components/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <div className='item-list-container'>
        <h1>{greeting}</h1>
        <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer