import React from 'react'
import Input from '@mui/material/Input';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import { useAuth } from './hooks/useAuth';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState } from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';


function ReviewForm() {
    
    const { authData } = useAuth();
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const user_id = authData.user.id
    const addReview = async () => {
      try {
                console.log("helloo");
                 console.log(authData.user.id);
        const response = await axios.post(
          `http://127.0.0.1:8000/api/products/${id}/reviews/`,
          {
            score:5,
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



        NotificationManager.success("Review posted")
      } catch (e) {
        console.log(e);
      }
    };


  return (
    <div>
      <form onSubmit={(event) => { addReview(); }}>
        <p>Post a review :</p>


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

        <Button style={{width:"50px"}} size='small' type='submit' color='primary' variant='contained'>Post</Button>
       </form>
    </div>
  )
}

export default ReviewForm
