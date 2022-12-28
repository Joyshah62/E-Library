import React from 'react'
import "./CheckoutBook.css";
import { useStateValue } from './StateProvider';

function CheckoutBook({id, title,author, image, link, rating,download}) {
    const [{ basket }, dispatch] = useStateValue();


    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id,
        })
    }

  return (
    <div className="checkoutbook">
        <img className="checkoutbook__image" src={image} alt=""/>
        <div className='checkoutbook__info'>
          <p className="checkoutbook__title">{title}</p>
          <p className="checkoutbook__title">{author}</p>
       

        <div className='checkoutbook__rating'>
            {
                Array(rating)
                .fill()
                .map((_) => (
                    <p>⭐</p>
                ))
            }
        </div>
        <a href={download} target="_blank" rel="noreferrer">
        <button className='download__book'>Download Book</button>
        </a>

            <button onClick={removeFromBasket} className='checkoutbook__remove'>Remove from Library</button>
        </div>
    </div>
  )
}

export default CheckoutBook