import React from 'react'
import "./CheckoutBook.css";
import { useStateValue } from './StateProvider';

function CheckoutBook({id, title,image,price, author ,link, rating,download,hideButton}) {
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
       
       <p className='checkoutbook__price'>
        <small>₹</small>
        <strong>{price}</strong>
       </p>

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

        <button className="buttonDownload"><span className='text'>Download</span><span className="icon"><img src="https://i.ibb.co/3znZG9S/icons8-download-from-cloud-24-1.png" width="24" height="24" viewBox="0 0 24 24"></img></span></button>
        
        </a>
        {!hideButton && (
            <button className="noselect" onClick={removeFromBasket}><span class='text'>Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></span></button>
        )}
        
        </div>
    </div>
  )
}

export default CheckoutBook