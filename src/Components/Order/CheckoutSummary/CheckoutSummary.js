import React from "react";
import Burger from "../../Burger/Burger";
import "./CheckoutSummary.css";

const checkoutSummary = props => {
  return (
    <div className="CheckoutSummary">
      <h1>Enjoy Your Tasty Burger!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <button className="Button Danger" onClick={props.onCheckoutCancelled}>
        CANCEL
      </button>
      <button className="Button Success" onClick={props.onCheckoutContinued}>
        CONTINUE
      </button>
    </div>
  );
};

export default checkoutSummary;
