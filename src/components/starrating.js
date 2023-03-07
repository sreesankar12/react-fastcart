import React, { useState } from 'react';
import { Rating } from '@mui/material';

const StarRating = ({ handleRating }) => {
  const [value, setValue] = useState(0);

  const handleStarClick = (event, newValue) => {
    setValue(newValue);
    handleRating(newValue);
  };

  return (
    <div>
      <Rating
        name="rating"
        value={value}
        onChange={handleStarClick}
        precision={1}
        max={5}
        size="large"
      />
    </div>
  );
};

export default StarRating;
