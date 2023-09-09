import React, { useState } from 'react'

const ItemCount = () => {

  const [contador, setContador] = useState(0)

  const restar = () => {
    setContador(contador - 1)
  }

  return (
    <>
    <p>{contador}</p>
    <button onClick={() => setContador(contador + 1)}>+</button>
    <button onClick={restar}>-</button>
   
     {/* <button onClick={() => setContador(0)}>Restart</button> / */}
    </>
  )
}

export default ItemCount