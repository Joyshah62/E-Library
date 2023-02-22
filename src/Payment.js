import React from 'react'
import CheckoutBook from './CheckoutBook';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
function Payment() {


    const [{ basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (
                    <Link to="/mybooks">{basket?.length} items</Link>
                    )
            </h1>
            {/* Payment section - delivery address */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 react lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>
            {/* Payment section - Reviewing items*/}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
                    {basket.map(item => (
                        <CheckoutBook
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            {/* Payment section - Payment Method */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>

                    <form>
                        <CardElement/>
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment
