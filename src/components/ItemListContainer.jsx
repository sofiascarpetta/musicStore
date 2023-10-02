import React from 'react'
import {useEffect, useState} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import { getProducts } from '../services/firebase';

const ItemListContainer = () => {
  const [products, setProducts] = useState ([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId).then((products) => setProducts(products));

    return (() => {
      setProducts();
    });
  }, [categoryId])

  useEffect(() => {
    console.log(products)
  }, [products])
    
  return (
    <>
      {
        <ItemList products={products} />
      } 
    </>
  )
}

export default ItemListContainer