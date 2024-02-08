import React, { useEffect, useState } from 'react';
import '../App.css';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const ItemDetailContainer = () => {
  const [product, setProducts] = useState(null)
  const [loading, setLoading] = useState(null)

  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)

    const docRef = doc(db, 'products', itemId)

    getDoc(docRef)
      .then(response => {
        const data = response.data()
        const productAdapted = { id: response.id, ...data }
        setProducts(productAdapted)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [itemId])

  return (
    <div className='ItemDetailContainer'>
      <ItemDetail {...product} />
    </div>
  );
}

export default ItemDetailContainer