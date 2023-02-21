import React, { useState } from "react";
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageUrls = images.map(image => image.original);
  
  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % imageUrls.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? imageUrls.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <div style={styles.container}>
      <button className="btn" style={styles.button} onClick={previousImage}><FontAwesomeIcon icon={faAngleLeft} /> </button>
      <img
        src={imageUrls[currentImageIndex]}
        style={styles.image}
        alt="slider-image"
      />
      <button className="btn btn-lg" style={styles.button} onClick={nextImage}> <FontAwesomeIcon icon={faAngleRight}/></button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "400px",
  },
  image: {
    height: "350px",
  },
  button:{
    color:"black",
    fontSize:"30px"
  }
  
};

export default ImageSlider;
