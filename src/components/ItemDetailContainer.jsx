import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/firebase';
import { AbsoluteCenter, Box, Spinner } from '@chakra-ui/react';

const ItemDetailContainer = () => {
  const { productId } = useParams(null);
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(productId).then((product) => setProduct(product));

    return(() => {
      setProduct({});
    })
  }, [productId]);  

  if(Object.keys(product).length === 0) {
    return(
      <Box position='relative' h='100px'>
        <AbsoluteCenter axis='both'>
          <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
          />
        </AbsoluteCenter>
      </Box>  
    )
  }

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