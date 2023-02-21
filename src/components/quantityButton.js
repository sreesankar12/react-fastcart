import React, { useState } from 'react'

function QuantityButton() {
    const [quantity,setQuantity]=useState(1)
    const increment = () => {
        setQuantity(quantity + 1);
      };
    
    const decrement = () => {
    if (quantity > 1) {
        setQuantity(quantity - 1);
    }
    };

    
  return (
    <div className='mt-3'>
      <button style={styles.button} onClick={decrement}>-</button>
      <input style={styles.input} className='text-center ms-1 me-1' type="text" value={quantity} readOnly />
      <button style={styles.button} onClick={increment}>+</button>
      
    </div>
  )
}
const styles = {

    button:{
    backgroundColor:"#6699ff",
    borderRadius:"0%",
    width:"25px",
    border:"none",
    borderRadius:"50%"
    },
    input:{
     
        width:"50px",
        
    }

}

export default QuantityButton
