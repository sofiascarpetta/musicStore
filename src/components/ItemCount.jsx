import React, { useState } from 'react'
import { useCartContext } from "../context/CartContext";

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
    <>
    <p>{count}</p>
    <button onClick={() => increment()}>+</button>
    <button onClick={() => decrement()}>-</button>
   
    <button onClick={() => onAdd(count)}>Add to cart</button>
    </>
  )
}

export default ItemCount