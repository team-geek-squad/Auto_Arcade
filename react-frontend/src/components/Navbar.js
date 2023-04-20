import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";

import AutoArcadeLogo from "../assets/auto-arcade-logo.png";

const Navbar = () => {
  return (
    <div className={classes.navBar}>
      <NavLink to="/" className={classes.logoDiv}>
        <img
          src={AutoArcadeLogo}
          alt="Auto Arcade Logo"
          className={classes.logo}
        />
      </NavLink>
      <div className={classes.linkDiv}>
        <NavLink to="/listings" className={classes.link}>
          <p className={classes.linkText}>Buy</p>
        </NavLink>
        <NavLink to="/add-listing" className={classes.link}>
          <p className={classes.linkText}>Sell</p>
        </NavLink>
      </div>
      <div className={classes.profileDiv}>
        <NavLink to="/sign-in" className={classes.signin}>
          <p className={classes.linkText}>Sign in</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
