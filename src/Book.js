import React from 'react';
import "./Book.css";
import { useStateValue } from './StateProvider';
function Book({ id, title, price, rating, image,link,author,download,author_link,by}) {

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
        <p ><h3>{title}</h3></p>
        <p className="author__link">{by}<a href={author_link} className="link" >{author}</a></p>
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
        {/* <button className="icon-btn add-btn" onClick={addToBasket}>
        <div className="add-icon"></div>
        <div className="btn-txt">Add</div> */}
        <button className='btn-5' onClick={addToBasket}>Add</button>

        
        <a href={link} target="_blank" rel="noreferrer">
            
        <button className='btn-5'>Buy Book</button>
        </a>
    </div>

    
  )
}

export default Book
