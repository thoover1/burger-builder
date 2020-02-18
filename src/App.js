import React, { Component } from "react";
import Layout from "./hoc/AppLayout/AppLayout";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./Containers/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import Orders from "./Containers/Orders/Orders";
import Auth from "./Containers/Auth/Auth";

export default class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/orders" component={Orders} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/auth" component={Auth} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}
