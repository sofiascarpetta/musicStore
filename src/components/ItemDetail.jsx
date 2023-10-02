import React, { useState } from 'react'
import { Card, Image, Stack, Text, CardBody, Divider, ButtonGroup, CardFooter, Heading, Button, Center} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useCartContext } from '../context/CartContext'

const ItemDetail = ({product}) => {
  const {title, id, price, imageId, stock, description} = product;
  const [count, setCount] = useState(0);
  const { addItem } = useCartContext();

    const onAdd = (count) => {
      if(count > 0){
        setCount(count);
        addItem({title, id, price, imageId, stock}, count);
      };
    };
  
  return (
    <div>
      <Center p='1rem'>
       <Card maxW='sm'>
  <CardBody>
    <Image
      src={imageId}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
      <Text>
            {description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
       $ {price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <ItemCount stock={stock} initial={1} onAdd={onAdd} />
    </ButtonGroup>
  </CardFooter>
</Card>
</Center>
    </div>
    
  )
}

export default ItemDetail