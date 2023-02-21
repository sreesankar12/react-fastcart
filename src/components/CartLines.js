import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from './hooks/useAuth';
import ProductDetails from '../ProductDetails';

const CartLines = (props) => {
    const [cartLines, setCartLines] = useState([]);

    const { authData } = useAuth();

    const getCartLines = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/baskets/${props.id}/lines/`, {
                headers: {
                    "Authorization": `Token ${authData.key}` 
                }
            });
            setCartLines(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getCartLines();
    }, [props.id, authData.key]);

    return (
        <div>
            <h1>Cart Lines</h1>
            {cartLines.map((line) => (
                <div key={line.id}>
                    <p> Product id: {line.product}</p>
                    <p>Quantity: {line.quantity} </p>
                    <p>Price: {line.price_incl_tax}</p>
                    <hr/>
                </div>
                
            ))}
        </div>
    );
};

export default CartLines;
