import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {

  return (
    <div>
      {
        products?.map((p) => {
          return (
            <Item producto={p}/>
          )
        })
      }
    </div>
  )
}

export default ItemList