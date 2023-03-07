import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from './hooks/useAuth';
import ProductDetails from '../ProductDetails';
import CartLineProduct from './CartLineProduct';
import { Table } from 'react-bootstrap';


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
    }, [props,props.delted]);

    return (
        <div>            
            <div >
                 <Table striped>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            {/* <th>Total</th> */}
                        </tr>
                    </thead>
                    {cartLines.map((line) => (
                         <CartLineProduct key={line.id} api={line.product} line={line} />
                         ))}
                    </Table>
            </div>
                        
            
        </div>
    );
};

export default CartLines;
