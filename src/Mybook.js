import React from 'react'
import { useStateValue } from './StateProvider'
import "./Mybook.css";
import CheckoutBook from './CheckoutBook';
function Mybook() {

    const [{basket}] = useStateValue();

  return (
    <div className='mybook'>
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
                {basket?.map(item => (
                    <CheckoutBook
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    link={item.link}
                    author={item.author}
                    />

                ))}
            </div>
        )}
    </div>
  )
}

export default Mybook