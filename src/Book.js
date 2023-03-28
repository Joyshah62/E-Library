import React from 'react';
import {FiDownload} from "react-icons/fi";
import {RiSendPlaneFill} from "react-icons/ri";
import { useStateValue } from './StateProvider';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./Book.css";
import "./Books.css";
import "./CheckoutBook.css";

function Book({ id, title, price, rating, image, link, author, download, author_link, by }) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                link: link,
                author: author,
                download: download,
                author_link: author_link,
                author: author,
                by: by,
            },
        })
        toast("Added to MyBooks");
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
            <img src={image} alt="" />
            {/* <button className="icon-btn add-btn" onClick={addToBasket}>
        <div className="add-icon"></div>
        <div className="btn-txt">Add</div> */}
            <div id="wrap">
                <div onClick={addToBasket} class="btn-slide">
                    <span class="title">Add</span>
                    <span class="title-hover">Click here</span>
                    <span class="circle"><RiSendPlaneFill/></span>   
                </div>
                <a href={download} class="btn-slide2">
                    <span class="circle2"><FiDownload/></span>
                    <span class="title2">Download</span>
                    <span class="title-hover2">Click here</span>
                </a>
            </div>
            {/* <button className='btn-5' onClick={addToBasket}>Add</button>


            <a href={download} target="_blank" rel="noreferrer">

            <button className="btn-5"><span className='text'>Download</span></button> */}

            {/* <button className="buttonDownload"><span className='text'>Download</span><span className="icon"><img src="https://i.ibb.co/3znZG9S/icons8-download-from-cloud-24-1.png" width="24" height="24" viewBox="0 0 24 24"></img></span></button> */}

            {/* </a> */}
            {/* <a href={link} target="_blank" rel="noreferrer">
            
        <button className='btn-5'>Buy Book</button>
        </a> */}
        </div>


    )
}

export default Book
