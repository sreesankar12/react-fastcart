import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageSlider from './components/imageSLider';
import ProductPrice from './ProductPrice';
import RichText from './components/richTextConverter';
import Button from 'react-bootstrap/Button';
import QuantityButton from './components/quantityButton';
import { useAuth } from './components/hooks/useAuth';
import { NotificationManager } from 'react-notifications';

const ProductDetails = () => {

  const [product, setProduct] = useState("");
  const { id } = useParams();
  const { authData } = useAuth();
  const [quantity, setQuantity] = useState(1);

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`http://127.0.0.1:8000/api/products/${id}/`);
      setProduct(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

    const getUserCart = async () => {
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/basket/add-product/',
          {
            quantity: quantity,
            url: `http://127.0.0.1:8000/api/products/${id}/`,
            slug: `${product.slug}`
          },
          {
            headers: {
              Authorization: `Token ${authData.key}` 
            }
          }
        );
        console.log(response.data);
        NotificationManager.success("Product added to Cart")
      } catch (e) {
        console.log(e);
      }
    };

  const handleClick = () => {
    getUserCart();
  };

  const handleQuantityChange = (value) => {
    setQuantity(value.quantity); // update the quantity state whenever the user changes the quantity
  };

  return (
    <div className='container w-50 mt-5'>
      <div className="row">
        <div className="col-sm-6">
          {product && <ImageSlider className='mt-2' images={product.images} />}
        </div>
        <div className="col-sm-6">
          <h4 className="mt-5">{product.title}</h4>
          {product && <ProductPrice className='mt-2' id={product.id} />}
          <QuantityButton quantity={quantity} newQuantity={handleQuantityChange} />
          <div className='mt-4'>
            <Button style={{ borderRadius: 0, gap: '20px' }} variant="warning">Buy Now</Button>
            <Button style={{ borderRadius: 0 }} onClick={handleClick} variant="primary" className="ms-3">Add to Cart</Button>
          </div>
        </div>
      </div>
      <div className="row m-5">
        <RichText html={product.description} />
      </div>
    </div>
  );
};

export default ProductDetails;
