import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { productId } = useParams(null);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});

  const getProducts = async () => {
    const response = await fetch ("https://fakestoreapi.com/products");
    const data = await response.json()
    
    return data
  }

  const findProductById = (products, id) => {
    return products.find((product) => product.id == id);
  }

  useEffect(() => {
    getProducts().then((products) => setProducts(products))
  }, []);

  useEffect(() => {
    if(products.length > 0 && productId) {
      const productFinded = findProductById(products, productId);
      setProduct(productFinded);
    }
    
  }, [products, productId]);  

  return (
    <>
    {
      product &&
      <ItemDetail product={product}/>
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