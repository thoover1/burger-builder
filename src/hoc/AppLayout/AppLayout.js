import React, { useState } from "react";
import Aux from "../Auxillary/Auxillary";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../Components/Navigation/SideDrawer/SideDrawer";
import "./AppLayout.css";
import { connect } from "react-redux";

const AppLayout = props => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  return (
    <Aux>
      <Toolbar
        drawerToggleClick={sideDrawerToggleHandler}
        isAuth={props.isAuthenticated}
      />
      <SideDrawer
        isAuth={props.isAuthenticated}
        closed={sideDrawerClosedHandler}
        open={sideDrawerIsVisible}
        drawerToggleClick={sideDrawerToggleHandler}
      />
      <main className="main">{props.children}</main>
    </Aux>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(AppLayout);
