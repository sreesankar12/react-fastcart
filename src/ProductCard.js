import ProductPrice from './ProductPrice';
import { Link } from "react-router-dom";


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard(props) {
  return (
    
    <Card className="ms-5" key={props.item.id} style={{ width: '20rem' ,height:'25rem',borderRadius:"0%"}}>
      <Link to={`products/${props.item.id}`} key={props.item.id} style={{ color: "black", textDecoration:"none" }}>
        <Card.Img style={{marginBottom:'-35px'}} variant="top" src={props.item.images[0].original}  />
      </Link>

      <Card.Body>
          <h6 style={{ marginTop: 'none' }} className="m-1">{props.item.title}</h6>
          <Card.Text>
              
          </Card.Text>
          <ProductPrice id={props.item.id} />
          
        
          <div style={{marginBottom:'0px'}} className='d-flex align-items-end'>
              <Button style={{borderRadius:0,gap:'20px'}} variant="warning">Buy Now </Button>
              <Button  style={{borderRadius:0}}  className="ms-3 " variant="primary">Add to Cart</Button>
          </div>
      </Card.Body>

</Card>

  );
}

export default ProductCard;
