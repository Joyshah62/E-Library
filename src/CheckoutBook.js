import React from 'react'
import "./CheckoutBook.css";
import { useStateValue } from './StateProvider';

function CheckoutBook({id, title, image, link, rating}) {
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
        <p>{title}</p>

        <div className='checkoutbook__rating'>
            {
                Array(rating)
                .fill()
                .map((_) => (
                    <p>⭐</p>
                ))
            }
        </div>
        <a href={link} target="_blank" rel="noreferrer">
        <button className='download__book'>Download Book</button>
        </a>

            <button onClick={removeFromBasket} className='checkoutbook__remove'>Remove from Library</button>
        </div>
    </div>
  )
}

export default CheckoutBook