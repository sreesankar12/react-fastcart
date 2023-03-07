import React from 'react'
import Input from '@mui/material/Input';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import { useAuth } from './hooks/useAuth';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState } from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import StarRating from './starrating';

function ReviewForm() {
    
    const { authData } = useAuth();
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');

    const [description, setDescription] = useState('');
    const user_id = authData.user.id

    const handleRating = (newRating) => {
    setRating(newRating);

  };

    const addReview = async () => {


      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/api/products/${id}/reviews/`,
          {
            score:rating,
            title:title,
            body:description,
            product:id,
            user: user_id,
          },
          {
            headers: {
              Authorization: `Token ${authData.key}` 
            }
          }
        );
        console.log(response.data);

        if (response.data.message){
          NotificationManager.warning("You can't review same product twice")
          console.log(response.data.message)
        }
        else{
        NotificationManager.success("Review posted")
        }
      } catch (e) {
        console.log(e);
      }
    };


  return (
    <div>
      <form onSubmit={(event) => { event.preventDefault(); addReview(); }}>
        
        <p>Post a review :</p>
        <StarRating required handleRating={handleRating}/>

        <TextareaAutosize
        style={{borderRadius:'10px',border:'.5px solid grey'}} minRows='1' required
        placeholder='Title'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        />
        <TextareaAutosize className='mt-3'
        style={{borderRadius:'10px',border:'1px solid grey'}} minRows='3' required
        placeholder='Description'
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        />

        <Button className='mb-3' style={{width:"50px",height:"30px"}} size='small' type='submit' color='primary' variant='contained'>Post</Button>
       </form>
    </div>
  )
}

export default ReviewForm
