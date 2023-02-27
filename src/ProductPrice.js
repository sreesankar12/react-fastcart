import React from "react";


class ProductPrice extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        price: []
      };
    }
  
    componentDidMount() {
        fetch(`http://127.0.0.1:8000/api/products/${this.props.id}/price/`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              price: result
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
  
    render()  {
      const { error, isLoaded, price } = this.state;
    //   const { message } = this.props;
      // if (error) {
      //   return <div>Error: {error.message}</div>;
      // } else if (!isLoaded) {
      //   return <div>Loading...</div>;
      // } else {
      //   return (
      //       <h4 style={{ marginTop: '-10px' }} className="text-success mt-3">₹ {price.incl_tax}</h4>
      //   );
      // }
      return(
      <p> {price.incl_tax} </p>
     )
    }
  }

  export default ProductPrice;