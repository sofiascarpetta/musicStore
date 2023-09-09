import React from 'react'
import {useEffect, useState} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState ([]);
  const { categoryId } = useParams();
  // valores de la api //
  const getProducts = async () => {
    const response = await fetch ("https://fakestoreapi.com/products");
    const data = await response.json()
    
    return data
  }

  const productosFiltrados = (category) => {
    if(products.length > 0) {
      return products.filter((product) => product.category === category);
    }
  }

  // PROMESA PARA MANDAR A PRODUCTS LO DE LA API //
    useEffect(() => {
      getProducts().then((products) => setProducts(products))
    }, [])

    useEffect(() => {
      console.log(products)
    }, [products])
    
  return (
      <>
        {
          categoryId ?
          <ItemList products={productosFiltrados(categoryId)} />
          :
          <ItemList products={products} />
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
//     reject(new Error("No hay mas datos"));
//   }
// });

// getProductos
//   .then((res) => {})
//   .catch((error) => {
//     console.log(error);
//   });




// return (

//     categoria ? <ItemList productos={productosFiltrados} /> : <ItemList productos={productos} />

// );


export default ItemListContainer