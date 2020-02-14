import React from "react";
import "./Input.css";

const input = props => {
  let inputElement = null;
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          onChange={props.change}
          className="InputElement"
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          onChange={props.change}
          className="InputElement"
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          onChange={props.change}
          className="InputElement"
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
          className="InputElement"
          {...props.elementConfig}
          value={props.value}
        />
      );
  }
  return (
    <div className="Input">
      <label className="Label">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
