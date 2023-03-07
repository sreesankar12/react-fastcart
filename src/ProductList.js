import React from "react";
import ProductCard from "./ProductCard";



class ProductList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        products: []
      };
    }
  
    componentDidMount() {
      fetch("http://127.0.0.1:8000/api/products/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              products: result
            });
          },

          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, products } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
        <div className="container">

            
          <div style={{display: 'flex', flexDirection: 'row'}} className=" m-5">

          {products?.map(item => (
            
              <ProductCard key={item.id} item={item} />


          ))}
            <img src="/home/sayone/Documents/learning/broto react/my-app/src/components/images/logo.png" alt="" width="100px" />

          </div>
        </div>
        );
      }
    }
  }

  export default ProductList;