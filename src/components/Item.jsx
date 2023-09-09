import React from 'react'
import { Card, Image, Stack, Text, CardBody, Divider, ButtonGroup, CardFooter, Heading, Button} from '@chakra-ui/react'


const Item = ({ producto}) => {
    
  return (
    <div>
        <Card maxW='sm'>
  <CardBody>
    <Image
      src= {producto.image}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{producto.title}</Heading>
      <Text color='blue.600' fontSize='2xl'>
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Detalle
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
  )
}

export default Item