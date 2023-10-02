import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cart, getQuantity, getTotal, removeItem, clearCart} = useCartContext();

    if(cart.length > 0) {
        return(
            cart.map(p => {
                return(
                    <div key={p.id}>
                        <p>{p.title}</p>
                        <p>{p.price}</p>
                    </div>
                )
            })
        )
    }
};

export default Cart;