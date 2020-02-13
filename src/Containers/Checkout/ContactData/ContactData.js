import React, { Component } from "react";
import "./ContactData.css";
import Spinner from "../../../Components/UI/Spinner/Spinner";
import axios from "../../../axios-orders";
import Input from "../../../Components/UI/Input/Input";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      zip: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Thomas Hoover",
        address: {
          street: "test street",
          zip: "34343",
          country: "US"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({
          loading: false
        });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <Input inputtype="input" type="text" name="name" placeholder="Name" />
        <Input
          inputtype="input"
          type="email"
          name="email"
          placeholder="Email"
        />
        <Input
          inputtype="input"
          type="text"
          name="street"
          placeholder="Address"
        />
        <Input inputtype="input" type="text" name="zip" placeholder="Zip" />
        <button className="Button Success" onClick={this.orderHandler}>
          ORDER
        </button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
