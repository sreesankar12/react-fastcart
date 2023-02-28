import React, { useState } from 'react';

function QuantityButton(props) {
  const [quantity, setQuantity] = useState(props.quantity);

  const increment = () => {
    const newQuantity = parseInt(quantity) + 1;
    setQuantity(newQuantity);

    props.newQuantity({ quantity: newQuantity });
  };

  const decrement = () => {
    if (quantity > 1) {
      const newQuantity = parseInt(quantity) - 1;
      setQuantity(newQuantity);
      props.newQuantity({ quantity: newQuantity });
    }

  };

  const handleChange =(e) => {

      console.log(e.target.value);

    };


  return (
    <div className='mt-3'>
      <button style={styles.button} onClick={decrement}>-</button>
      <input
        name='quantity'
        style={styles.input}
        className='text-center ms-1 me-1'
        type="text"
        value={quantity}
        onChange={handleChange}
      />
      <button style={styles.button} onClick={increment}>+</button>
    </div>
  );
}

const styles = {
  button: {
    backgroundColor: '#6699ff',
    borderRadius: '50%',
    width: '25px',
    border: 'none',
  },
  input: {
    width: '50px',
  },
};

export default QuantityButton;
