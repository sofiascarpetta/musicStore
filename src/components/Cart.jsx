import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
} from '@chakra-ui/react'
import DeleteButton from './DeleteButton';
import OrderButton from './OrderButton';

const Cart = () => {
    const {cart, getQuantity, getTotal} = useCartContext();

    if(cart.length > 0) {
        return(
            <Box>
                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption>Total: ${getTotal()} <DeleteButton/> <OrderButton/></TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Product</Th>
                                <Th>Price</Th>
                                <Th isNumeric>Quantity</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {
                                cart?.map(p => {
                                    return(
                                        <Tr key={p.id}>
                                            <Td>{p.title}</Td>
                                            <Td>$ {p.price}</Td>
                                            <Td isNumeric>{p.count}</Td>
                                            <Td><DeleteButton productId={p.id}/></Td>
                                        </Tr>
                                    )
                                })
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        )
    }
};

export default Cart;