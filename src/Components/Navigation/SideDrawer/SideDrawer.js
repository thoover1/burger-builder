import React from "react";
import Logo from "../../../assets/burger-logo.png";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxillary/Auxillary";
import "./SideDrawer.css";

const sideDrawer = props => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <Aux>
      <Backdrop
        show={props.open}
        click={(props.closed, props.drawerToggleClick)}
      />
      <div className={attachedClasses.join(" ")}>
        <img src={Logo} alt="" />
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
