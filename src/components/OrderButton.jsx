import { CheckCircleIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const OrderButton = () => {
  return (
    <Link to={'/order'}>
        <Button leftIcon={<CheckCircleIcon/>} size={"sm"} colorScheme='whatsapp'> 
            Place Order
        </Button>
    </Link>
  )
}

export default OrderButton