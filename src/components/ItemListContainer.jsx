import React from 'react'
import {useEffect, useState} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import { getProducts } from '../services/firebase';
import { Spinner, AbsoluteCenter, Box } from '@chakra-ui/react'


const ItemListContainer = () => {
  const [products, setProducts] = useState ([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId).then((products) => setProducts(products));

    return (() => {
      setProducts([]);
    });
  }, [categoryId]);

  if(products && products.length < 0) {
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
    
  return(
    <Box m={4}>
      <ItemList products={products} /> 
    </Box>
  )
}

export default ItemListContainer