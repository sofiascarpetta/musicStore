import { StarIcon } from '@chakra-ui/icons'
import { Divider, Flex, Box} from '@chakra-ui/react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

import React from 'react'


const CartWidget = () => {
  const {cart, getQuantity} = useCartContext();

  return (
    <div>
      <Flex>
        <Box>
          <StarIcon />
        </Box>
        <Divider />
        <Link to={"/cart"}>
          <Box>
            <p>{cart.length ? getQuantity() : 0}</p>
          </Box>
        </Link>
        
      </Flex>
     

    </div>
  )
}

export default CartWidget