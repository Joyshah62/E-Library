import React from 'react';
import { FiDownload } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";
import { useStateValue } from './StateProvider';
import { toast } from 'react-toastify';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "react-toastify/dist/ReactToastify.css";
import "./Book.css";
import "./Books.css";
import "./CheckoutBook.css";
import books from './books.db';

function Book({ id, title, price, rating, image, link, author, download, author_link }) {

    const [{ basket }, dispatch] = useStateValue();
    const fullStars = Math.floor(rating);
    const partialStar = rating % 1;
    library.add(faStar);

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
            },
        })
        toast("Added to Cart");
    }

    return (
        <div className='book'>
            <div className='book__info'>
                <p ><h3>{title}</h3></p>
                <p className="author__link">by <a href={author_link} className="link" >{author}</a></p>
                <p className='book__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>

                <div className='book__rating'>
                    {Array(fullStars)
                        .fill()
                        .map((_) => (
                            <FontAwesomeIcon icon='star' style={{ color: '#ffc83d' }} />
                        ))}
                    {partialStar > 0 && (
                        <span
                            style={{
                                position: 'relative',
                                display: 'inline-block',
                            }}
                        >
                            <FontAwesomeIcon icon='star' style={{ color: 'transparent' }} className='partStar' />
                            <span
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    overflow: 'hidden',
                                    width: `${partialStar * 100}%`,
                                }}
                            >
                                <FontAwesomeIcon icon='star' style={{ color: '#ffc83d' }} className='partStar' />
                            </span>
                        </span>
                    )}
                    <span id="ratingTxt">&nbsp;{rating}</span>

                </div>


            </div>
            <img src={image} alt="" />
            <div id="wrap">
                <div onClick={addToBasket} class="btn-slide">
                    <span class="title">Add</span>
                    <span class="title-hover">Click here</span>
                    <span class="circle"><RiSendPlaneFill /></span>
                </div>
                <a href={download} class="btn-slide2">
                    <span class="circle2"><FiDownload /></span>
                    <span class="title2">Download</span>
                    <span class="title-hover2">Click here</span>
                </a>
            </div>
        </div>


    )
}

export default Book
