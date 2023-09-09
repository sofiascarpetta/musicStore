import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
 // valores de la api //
 const getProducts = async () => {
  const response = await fetch ("https://fakestoreapi.com/products");
  const data = await response.json()
  
  return data
}

const [product, setProduct] = useState ([]);

// PROMESA PARA MANDAR A PRODUCT LO DE LA API //
useEffect(() => {
  getProducts().then((product) => setProduct(product))
}, [])

return (
  <>
  {
    product.map((p)=>{
      return(
        <ItemDetail product={p}/>
      )
    })
  }
  </>
 )
}

// const getProductos = new Promise((resolve, reject) => {
//   if (productos.length > 0) {
//     setTimeout(() => {
//       resolve(productos);
//     }, 2000);
//   } else {
//     reject(new Error("No hay datos"));
//   }
// });

// getProductos
// .then((res) =>{
// })
// .catch((error) =>{
//   console.log(error);
// })

// return (
//   <>
//     <ItemDetail productos={productos}
//     />
//   </>
// );


export default ItemDetailContainer