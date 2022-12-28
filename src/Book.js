import React from 'react';
import "./Book.css";
import { useStateValue } from './StateProvider';
function Book({ id, title, price, rating, image,link,author }) {

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
        <button onClick={addToBasket} className='add_to_mybook'>Add to MyBooks</button>
        <a href={link} target="_blank" rel="noreferrer">
        <button className='download__book'>Download Book</button>
        </a>
    </div>

    
  )
}

export default Book