import React,{ useState, useEffect} from 'react'
import { useAuth } from './hooks/useAuth';
import axios from 'axios';

function AddToCart() {
    const { authData } = useAuth();
    console.log("add to cart");
    const getUserCart = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/basket/add-product/', {
                quantity: "2",
                url: "http://127.0.0.1:8000/api/products/2/",
                slug: " csc"
            }, {
                headers: {
                    "Authorization": `Token ${authData.key}` 
                }
            });
            console.log(response.data);
            alert("product added to cart")
        } catch (e) {
            console.log(e);
        }
}
    console.log("add to cart fn");
    
    useEffect(() => {
        getUserCart();
    }, []);

  return (
    <div>
      
    </div>
  )
}

export default AddToCart
