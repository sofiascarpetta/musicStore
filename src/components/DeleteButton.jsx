import { DeleteIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import React from 'react'
import { useCartContext } from '../context/CartContext';

const DeleteButton = ({productId}) => {
    const { removeItem, clearCart } = useCartContext();

    const handleClick = () => {
        if(productId) {
            removeItem(productId);
        } else {
            clearCart();
        }   
    }

    return (
        <Button leftIcon={<DeleteIcon />} size='sm' colorScheme='pink' variant='solid' onClick={handleClick}>
            { productId ? "Delete" : "Delete All"}
        </Button>
    )
}

export default DeleteButton