import React from "react";
import "./Input.css";

const input = props => {
  let inputElement = null;
  let validationError = null;
  const inputClasses = ["InputElement"];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push("Invalid");
    validationError = (
      <p className="ValidationError">Please enter a valid value!</p>
    );
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          onChange={props.change}
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          onChange={props.change}
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          onChange={props.change}
          className={inputClasses.join(" ")}
          value={props.value}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          onChange={props.change}
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }
  return (
    <div className="Input">
      <label className="Label">{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default input;
