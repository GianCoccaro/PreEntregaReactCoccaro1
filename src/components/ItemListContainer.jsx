import '../App.css'
import { useEffect, useState } from 'react';
import { getProducts,  getProductByCategory } from "../../asyncMock";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts

    asyncFunc(categoryId)
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [categoryId])

  return (
    <div className='item-list-container'>
        <h1>{greeting}</h1>
        <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer