import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CartLines from './CartLines';
import { useAuth } from './hooks/useAuth';

const Cart = () => {
    const [cart, setCart] = useState(null);
    const { authData } = useAuth();

    const getUserCart = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/basket/', {
                headers: {
                    "Authorization": `Token ${authData.key}` 
                }
            });
            setCart(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getUserCart();
    }, []);

    return (
        <div className='container w-50 mt-5'>
            <div className="row "  >
                <div className="col-sm-6 ">
                    <h1>Cart</h1>
                     {cart && <h4 className="mt-5 ">{cart.id }</h4> }
                    {cart && <CartLines id={cart.id} />}
                    <p>Total : { cart && cart.total_incl_tax}</p>
                </div>
            </div>   
        </div>
    );
};

export default Cart;
