import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
} from '@chakra-ui/react'
import { useState } from 'react'
import { writeBatch, doc, Timestamp } from 'firebase/firestore'
import { addOrder, db, getProductById } from '../services/firebase'
import { useCartContext } from '../context/CartContext'
import OrderId from "./OrderId"
import { useToast } from '@chakra-ui/react'

const ContactForm = () => {
    const toast = useToast();
    const {cart, getTotal, clearCart, removeItem} = useCartContext();
    const [processingOrder, setProcessingOrder] = useState(false);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [zip, setZip] = useState('');
    const [orderId, setOrderId] = useState('');

    const phoneRegex =  /^\d{4,14}$/; 

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name !== '' && address !== '' && email !== '' && phone !== '' && zip !== ''){
            console.log("in")
            if(phoneRegex.test(phone)){
                const objOrder = {
                    buyer: {
                    name: name,
                    phone: phone,
                    email: email,
                    address: address,
                    zip: zip
                    },
                    items: cart,
                    total: getTotal(),
                    date: Timestamp.fromDate(new Date())
                };
    
                const batch = writeBatch(db);
                const outOfStock = [];
    
                const executeOrder = () => {
                    setProcessingOrder(true);
                    if(outOfStock.length === 0){
                        addOrder(objOrder).then(response => {
                            batch.commit().then(() => {
                                console.log("listo")
                                setOrderId(response);
                                toast({
                                    title: 'Order generated successfuly',
                                    description: "We've created your order!",
                                    status: 'success',
                                    duration: 9000,
                                    isClosable: true,
                                }) 
                            });
                        })
                        .finally(() => {
                            clearCart();
                            setProcessingOrder(false)
                        })
                        .catch(err => console.log(err))
                    } else {
                        outOfStock.forEach(prod => {
                            console.log("lol")
                            toast({
                                title: 'Product out of stock',
                                description: "We're sorry, the product is sold out",
                                status: 'error',
                                duration: 9000,
                                isClosable: true,
                            }) 

                            removeItem(prod.id);
                        });
                    };
                };
    
                objOrder.items.forEach((prod) => {
                    getProductById(prod.id).then(response => {
                        if(response.stock >= prod.count){
                            batch.update(doc(db, 'products', response.id), {
                                stock: response.stock - prod.count
                            });
                        } else {
                            outOfStock.push(response);
                        };
                    }).catch(err => console.log(err)).then(() => executeOrder()).finally(setProcessingOrder(false));
                });
            } else {
                toast({
                    title: 'Invalid phone number',
                    description: "Please enter a valid phone number",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                }) 
            }
        } else {
            toast({
                title: 'Empty fields',
                description: "Please fill all fields.",
                status: 'error',
                duration: 9000,
                isClosable: true,
            }) 
        };
    };

    if(orderId){
        return(
            <OrderId orderId={orderId}/>
        );
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <FormControl isRequired >
                <FormLabel>Name</FormLabel>
                <Input type='text' value={name} placeholder='Name' onChange={({target}) => setName(target.value)}/>

                <FormLabel>Phone</FormLabel>
                <Input type='number' value={phone} placeholder='Phone' onChange={({target}) => setPhone(target.value)}/>

                <FormLabel>E-mail</FormLabel>
                <Input type='email' value={email} placeholder='E-mail' onChange={({target}) => setEmail(target.value)}/>

                <FormLabel>Address</FormLabel>
                <Input type='text' value={address} placeholder='Address' onChange={({target}) => setAddress(target.value)}/>

                <FormLabel>ZIP Code</FormLabel>
                <Input type='number' value={zip} placeholder='ZIP Code' onChange={({target}) => setZip(target.value)}/>

                <Button
                mt={4}
                colorScheme='teal'
                type='submit'
                >
                    Submit
                </Button>
            </FormControl>
        </form>
        
    )
}

export default ContactForm