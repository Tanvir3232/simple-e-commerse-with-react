import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({product,handleRemoveFromCart}) => {
   
    const {id,img,price,quantity,category} = product;
    return (
        <div className='review'>
             
            <div className='review-info'>
               <img src={img} alt="" />
               <div>
                  <h4>{category}</h4>
                  <p>Price: <span className='text-primary'>${price}</span>  </p>
                  <p>Quantity: <span className='text-primary'>{quantity}</span> </p>
               </div>
            </div>
            <div>
                <button className='delete-btn' onClick={()=>handleRemoveFromCart(id)}>
                    <FontAwesomeIcon className='delete-icon' icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;