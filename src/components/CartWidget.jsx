import { StarIcon } from '@chakra-ui/icons'
import { Divider, Flex, Box} from '@chakra-ui/react'
import React from 'react'


const CartWidget = () => {
  return (
    <div>
      <Flex>
        <Box>
          <StarIcon />
        </Box>
        <Divider />
        <Box>
          <p>3</p>
        </Box>
      </Flex>
     

    </div>
  )
}

export default CartWidget