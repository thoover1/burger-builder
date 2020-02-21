import React from "react";
import "./OrderSummary.css";
import Aux from "../../../hoc/Auxillary/Auxillary";

const OrderSummary = props => {
  let ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ testTransfrom: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <button className="Button Danger" onClick={props.purchaseCanceled}>
        CANCEL
      </button>
      <button className="Button Success" onClick={props.purchaseContinued}>
        CONTINUE
      </button>
    </Aux>
  );
};

export default OrderSummary;
