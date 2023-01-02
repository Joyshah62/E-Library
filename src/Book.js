import React from 'react';
import "./Book.css";
import { useStateValue } from './StateProvider';
function Book({ id, title, price, rating, image,link,author,download}) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id:id,
                title:title,
                image:image,
                rating:rating,
                link:link,
                author:author,
                download:download,
            },
        })
    }

  return (
    <div className='book'>
        <div className='book__info'>
        <p>{title}</p>
        <p>{author}</p>
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
        <button className="icon-btn add-btn" onClick={addToBasket}>
        <div className="add-icon"></div>
        <div className="btn-txt">Add</div>
        </button>

        
        <a href={link} target="_blank" rel="noreferrer">
            
        <button className='download__book'>Buy Book</button>
        </a>
    </div>

    
  )
}

export default Book