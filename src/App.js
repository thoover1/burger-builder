import React, { useEffect, Suspense } from "react";
import Layout from "./hoc/AppLayout/AppLayout";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";

const Checkout = React.lazy(() => {
  return import("./Containers/Checkout/Checkout");
});
const Auth = React.lazy(() => {
  return import("./Containers/Auth/Auth");
});
const Orders = React.lazy(() => {
  return import("./Containers/Orders/Orders");
});
const Logout = React.lazy(() => {
  return import("./Containers/Auth/Logout/Logout");
});

const App = props => {
  const { onTryAutoSignup } = props;
  useEffect(() => {
    function hookOnTryAutoSignup() {
      onTryAutoSignup();
    }
    hookOnTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <Switch>
      <Route path="/auth" render={props => <Auth {...props} />} />
      <Route path="/" exact component={BurgerBuilder} />
      <Redirect to="/" />
    </Switch>
  );
  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/checkout" render={props => <Checkout {...props} />} />
        <Route path="/orders" render={props => <Orders {...props} />} />
        <Route path="/logout" render={props => <Logout {...props} />} />
        <Route path="/auth" render={props => <Auth {...props} />} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
