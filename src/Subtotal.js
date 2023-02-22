import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

function Subtotal() {
    const [{basket},dispatch] = useStateValue();

  return (
    <div className="subtotal">
        <CurrencyFormat
            renderText={(value)=> (
                <>
                    <p>
                        Subtotal({basket.length} items):<strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/>This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}

        />


        <button className="subtotal__button">
            Proceed to Buy
        </button>
    </div>
  )
}

export default Subtotal