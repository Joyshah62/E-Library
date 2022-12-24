import React from 'react';
import "./Book.css";
function Book({ id, title, price, rating, image,link }) {

  return (
    <div className='book'>
        <div className='book__info'>
        <p>{title}</p>
        <p className='book__price'>
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className='book__rating'>
            {
                Array(rating)
                .fill()
                .map((_) => (
                    <p>⭐</p>
                ))
            }
            </div>
        </div>
        <img src={image} alt=""/>
        <button className='add_to_mybook'>Add to MyBooks</button>
        <a href={link} target="_blank" rel="noreferrer">
        <button className='download__book'>Download</button>
        </a>
    </div>

    
  )
}

export default Book