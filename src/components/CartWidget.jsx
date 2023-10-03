import { StarIcon } from '@chakra-ui/icons'
import { Divider, Flex, Box} from '@chakra-ui/react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

import React from 'react'


const CartWidget = () => {
  const {cart, getQuantity} = useCartContext();

  return (
    <div>
      <Link to={"/cart"}>
        <Flex>
          <Box>
            <StarIcon />
          </Box>
          <Divider />
          
          <Box>
            <p>{cart.length ? getQuantity() : 0}</p>
          </Box>
        </Flex>
      </Link>
    </div>
  )
}

export default CartWidget