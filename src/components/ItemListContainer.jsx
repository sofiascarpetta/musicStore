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

// const getProductos = new Promise((resolve, reject) => {
//   if (productos.length > 0) {
//     setTimeout(() => {
//       resolve(productos);
//     }, 2000);
//   } else {
//     reject(new Error("No hay mas datos"));
//   }
// });

// getProductos
//   .then((res) => {})
//   .catch((error) => {
//     console.log(error);
//   });


// const productosFiltrados = productos.filter((producto) => producto.categoria === categoria)

// return (

//     categoria ? <ItemList productos={productosFiltrados} /> : <ItemList productos={productos} />

// );


export default ItemListContainer