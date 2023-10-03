import React from 'react'
import Item from './Item'
import { Grid, GridItem } from '@chakra-ui/react'

const ItemList = ({ products }) => {

  return (
    <div>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        {
          products?.map((p) => {
            return (
              <GridItem key={p.id}>
                <Item producto={p}/>
              </GridItem>
            )
          })
        }
      </Grid>
    </div>
  )
}

export default ItemList