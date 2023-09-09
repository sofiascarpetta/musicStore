import React from 'react'
import {useEffect, useState} from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {
// valores de la api //
    const getProducts = async () => {
      const response = await fetch ("https://fakestoreapi.com/products");
      const data = await response.json()
      
      return data
    }

    const [product, setProduct] = useState ([])

  // PROMESA PARA MANDAR A PRODUCT LO DE LA API //
    useEffect(() => {
      getProducts().then((product) => setProduct(product))
    }, [])
    
  return (
      <>
        <ItemList product={product} /> 
      </>
  )
}

export default ItemListContainer