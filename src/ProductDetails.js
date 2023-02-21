
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageSlider from './components/imageSLider';
import ProductPrice from './ProductPrice';
import RichText from './components/richTextConverter';
import Button from 'react-bootstrap/Button';
import QuantityButton from './components/quantityButton';

const ProductDetails = () => {

  const [product, setProduct] = useState("")
  const { id } = useParams();

  const getSingleProduct = async () => {
      const {data} = await axios.get(`http://127.0.0.1:8000/api/products/${id}/`)
      console.log(data)
      setProduct(data)
    }
    useEffect(() => {
        getSingleProduct();
    },[])



  return (
    <div className='container w-50 mt-5'>
            <div className="row "  >
                <div className="col-sm-6 " >
                    {product && <ImageSlider className='mt-2' images={product.images} />}
                </div>
                
                <div className="col-sm-6 ">
                    <h4 className="mt-5 ">{product.title}</h4>
                    
                    {product && <ProductPrice className='mt-2' id={product.id} />}
                    <QuantityButton />
                    <div className='mt-4'>
                        <Button style={{borderRadius:0,gap:'20px'}}  variant="warning">Buy Now </Button>
                        <Button  style={{borderRadius:0}} variant="primary" className="ms-3 ">Add to Cart</Button>
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