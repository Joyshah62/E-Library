import React from 'react'
import "./Book.css";
function Book({ id, title, price, rating, image }) {
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
        <div href="https://www.amazon.in/DO-EPIC-SHIT-Ankur-Warikoo/dp/9391165486">
          <button className='download__book'>Download Book</button>
         </div>
    </div>
  )
}

export default Book