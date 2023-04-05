import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import { auth } from './firebase';

import "./Subtotal.css";

function Subtotal() {
    const history = useHistory();
    const [{ basket, user }] = useStateValue();
    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal({basket.length} items):<strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}

            />

            {user ? <>
                <button onClick={e => history.push('/payment')} className="button5">
                    Proceed to Buy
                </button>
            </>
                :
                <>
                    <p className="loginError" onClick={event =>  window.location.href='/login'}>Please Log In to continue</p>
                </>}
        </div>
    )
}

export default Subtotal