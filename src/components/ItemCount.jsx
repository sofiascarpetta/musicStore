import React, { useState } from 'react'
import { useCartContext } from "../context/CartContext";
import { Button, ButtonGroup, HStack, IconButton } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const ItemCount = ({cart = false, stock, initial, onAdd, productId}) => {
  const {decrementAmount, incrementAmount} = useCartContext();
  const [count, setCount] = useState(initial);

  const decrement = () => {
    if(count > 1){
      setCount(count - 1);
      if(cart){
        decrementAmount(productId);
      };
    };
  };

  const increment = () => {
    if(count < stock){
      setCount(count + 1);
      if(cart){
        incrementAmount(productId);
      };
    };
  };

  return (
    <HStack>
      <ButtonGroup size='sm' isAttached variant='outline'>
        <IconButton aria-label='Increment' onClick={() => increment()} icon={<AddIcon />} />
        <Button>{count}</Button>
        <IconButton aria-label='Decrement' onClick={() => decrement()} icon={<MinusIcon />} />
      </ButtonGroup>

      <Button size='sm' onClick={() => onAdd(count)} colorScheme='purple'>Add to cart</Button>
    </HStack>
  )
}

export default ItemCount