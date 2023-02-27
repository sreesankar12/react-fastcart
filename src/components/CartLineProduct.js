import React from 'react'
import axios from 'axios';
import { useAuth } from './hooks/useAuth';
import { useEffect, useState } from 'react';
import ProductPrice from '../ProductPrice';
import { NotificationManager } from 'react-notifications';
import QuantityButton from './quantityButton';
import { Button } from '@mui/material';
function CartLineProduct(props) {
    const [product,setProduct] = useState();
    const line =props.line
      const [quantity, setQuantity] = useState(line.quantity);

    const { authData } = useAuth();

    const getCartProduct = async () => {
        try {
            const response = await axios.get(`${props.api}`, {
                headers: {
                    "Authorization": `Token ${authData.key}` 
                }
            });
            setProduct(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {

        getCartProduct();

    }, [props.api, authData.key,quantity]);


  const getUpdatedCart = async () => {
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/basket/add-product/',
          {
            quantity: 1,
            url: props.api,
            slug: `${product.slug}`
          },
          {
            headers: {
              Authorization: `Token ${authData.key}` 
            }
          }
        );
        console.log(response.data);
        NotificationManager.success("Cart Updated")
      } catch (e) {
        console.log(e);
      }
    };

    const handleQuantityChange = (value) => {
      setQuantity(value.quantity);
      console.log({quantity})
      getUpdatedCart();
     };
    


  return (

              
          <tbody>
            { product &&
              <tr key={product.id}>
                <td  style={{alignItems:"middle"}} > <h5 className="ms-3" style={{verticalAlign: "middle"}}>{product.title}</h5></td>
                <td><img src={product.images[0].original} alt={product.title} height="130px" /></td>
                <td className='text-center'>
                  <QuantityButton quantity={line.quantity} newQuantity={handleQuantityChange} /> 
                  <Button style={{height:"20px",fontSize:"12px"}} size="small" variant='contained'> Delete </Button></td>
                <td><ProductPrice id={product.id}/> </td>
          <td>
            {<ProductPrice id={product.id} />} * {line.quantity} = {<ProductPrice id={product.id} price={product.price * line.quantity} />}
          </td>              
          </tr>
            }
          </tbody>
          
  )
}

export default CartLineProduct
