import React, { useEffect, useState } from 'react';
import '../App.css';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(null)

  const id = useParams().id

  useEffect(() => {
    setLoading(true)

    const docRef = doc(db, 'products', id)

    getDoc(docRef)
      .then(response => {
        setItem(
          { ...response.data(), id: response.id }
        )
      })
  }, [id])

  return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>
  );
}

export default ItemDetailContainer