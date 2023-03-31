import React from 'react'
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import CheckoutBook from './CheckoutBook';
import './Order.css'

function Order({ order }) {
    return (
        <div className='order'>
            <h2 className='orderTitle'>Invoice</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small><b className='orderIdTitle'>Order ID:</b><b className='orderIdMain'> {order.id}</b></small>
            </p>
            <hr />
            {order.data.basket?.map(item => (
                <CheckoutBook
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <hr />
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />   
        </div>
    )
}

export default Order