import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CartLines from './CartLines';
import { useAuth } from './hooks/useAuth';
import { Button } from 'react-bootstrap';
const Cart = () => {
    const [cart, setCart] = useState(null);
    const { authData } = useAuth();
    const [deletedProduct, setDeletedProduct] = useState(null);

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

    const handleDeleted=(value)=>{
        setDeletedProduct(value)
    }

    useEffect(() => {
        getUserCart();
    }, [deletedProduct]);

    return (
        <div className='container w-75 mt-5'>
            <div className="row "  >
                <div className=" ">
                    <h1>Cart</h1>
                    {cart && <CartLines key={cart.id} id={cart.id} deleted={handleDeleted} />}
                    { cart &&<h3 align="right">Total :  {cart.total_incl_tax} </h3>}
                    <div className='mt-3' align="right">
                        <Button style={{width:"150px"}} variant="primary">Checkout</Button>
                    </div>
                </div>
            </div>   
        </div>
    );
};

export default Cart;
