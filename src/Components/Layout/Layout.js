import React from "react";
import Aux from "../../hoc/Auxillary";
import "./Layout.css";

const layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="main">{props.children}</main>
  </Aux>
);

export default layout;
