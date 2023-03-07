import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './css/reviews.css'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Rating } from '@mui/material';

function ProductReviews() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {

    const getReviews = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/products/${id}/reviews/`);
            if (!response.ok) {
                throw new Error('Failed to fetch reviews');
            }
            const data = await response.json();
            setReviews(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    
    getReviews();
        
    },[]);

    if (loading) {
        return <p>Loading reviews...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            
            <div className='main'>
            {reviews.map(review => (
                
                    <div className='reviews row' key={review.id}>

                        <h6 className='review-name' key={review.id}> <AccountCircleRoundedIcon  fontSize="small"/> {review.name? review.name:`User ${review.id}`}
                        <span><Rating
                        name="rating"
                        value={review.score}
                        size="medium" 
                        /></span>
                        </h6>
                        <h6 className='review-body mt-1'>{review.title}</h6>
                        <p className='review-body'>{review.body}</p>
                    </div>
               
            ))}
             </div>
        </div>
    );
}

export default ProductReviews;
