import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./Toolbar.css";
import Logo from "../../../assets/burger-logo.png";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import { NavLink } from "react-router-dom";

const toolbar = props => (
  <header className="Toolbar">
    <DrawerToggle click={props.drawerToggleClick} />
    <div className="img-holder">
      <NavLink to="/">
        <img src={Logo} alt="MyBurger" />
      </NavLink>
    </div>
    <nav className="DesktopOnly">
      <NavigationItems isAuthenticated={props.isAuth} />
    </nav>
  </header>
);

export default toolbar;
