import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/firebase';

const ItemDetailContainer = () => {
  const { productId } = useParams(null);
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(productId).then((product) => setProduct(product));
  }, [productId]);  

  return (
    <>
    {
      product &&
      <ItemDetail product={product}/>
    }
    </>
  )
}

export default ItemDetailContainer