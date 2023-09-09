import React from 'react'
import { Card, Image, Stack, Text, CardBody, Divider, ButtonGroup, CardFooter, Heading, Button, Center} from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({product}) => {


  
  return (
    <div>
      <Center p='1rem'>
       <Card maxW='sm'>
  <CardBody>
    <Image
      src= {product.image}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{product.title}</Heading>
      <Text>
            {product.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
       $ {product.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Agregar al carrito
      </Button>
      <ItemCount/>
    </ButtonGroup>
  </CardFooter>
</Card>
</Center>
    </div>
    
  )
}

export default ItemDetail