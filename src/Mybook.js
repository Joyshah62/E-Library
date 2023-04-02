import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutBook from './CheckoutBook';
import Subtotal from './Subtotal';
import "./Mybook.css";

function Mybook() {

    const [{ basket }] = useStateValue();

    return (
        <div className='mybook'>
            <div className='checkout__left'>
                <img className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Library is empty</h2>
                        <p>
                            You have no books in your library. To add one or more
                            click "Add to MyBooks" next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className='mybook__title'>Your Library</h2>
                        {basket?.map((item) => (
                            <CheckoutBook
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                link={item.link}
                                author={item.author}
                                download={item.download}
                                author_link={item.author_link}
                                by={item.by}
                            />

                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className='checkout__right'>
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Mybook