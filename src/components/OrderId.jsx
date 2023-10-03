import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text, Highlight } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import React from 'react'

const OrderId = ({orderId}) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/");
    }

    return (
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        >
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
            alt='Caffe Latte'
        />

        <Stack>
            <CardBody>
            <Heading size='md'>Order completed!</Heading>

            <Text py='2'>
                Thanks for your purchase, here's your Order ID: {orderId}
            </Text>
            </CardBody>

            <CardFooter>
            
            <Button variant='solid' colorScheme='blue' onClick={handleBackClick}>
                Back to Home {"<<<"}
            </Button>
            </CardFooter>
        </Stack>
        </Card>
    )
}

export default OrderId