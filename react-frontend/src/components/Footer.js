import { NavLink } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SubscriptionBanner from "./SubscriptionBanner";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <SubscriptionBanner />
      <div className={classes.footerContent}>
        <Row>
          <Col className="col-3">
            <h4 className={classes.sectionTitle}>Auto Arcade Pvt. Ltd</h4>
            <p className={classes.content}>
              21st Floor
              <br />
              Access Towers
              <br />
              Union Place
              <br />
              Colombo 02, 00200
            </p>
            <p className={classes.content}>Phone : (011) 2278787</p>
          </Col>
          <Col className="col-3">
            <h4 className={classes.sectionTitle}>Company</h4>
            <NavLink to="*" className={classes.linkContent}>
              <p className={classes.content}>About Auto Arcade</p>
            </NavLink>
            <NavLink to="*" className={classes.linkContent}>
              <p className={classes.content}>Advertise with Auto Arcade</p>
            </NavLink>
            <NavLink to="*" className={classes.linkContent}>
              <p className={classes.content}>Our Team</p>
            </NavLink>
            <NavLink to="*" className={classes.linkContent}>
              <p className={classes.content}>Blog</p>
            </NavLink>
          </Col>
          <Col className="col-3">
            <h4 className={classes.sectionTitle}>For Sellers</h4>
            <NavLink to="*" className={classes.linkContent}>
              <p className={classes.content}>Seller Signup</p>
            </NavLink>
            <NavLink to="*" className={classes.linkContent}>
              <p className={classes.content}>Seller Resources</p>
            </NavLink>
          </Col>
          <Col className="col-3">
            <h4 className={classes.sectionTitle}>Help</h4>
            <NavLink to="*" className={classes.linkContent}>
              <p className={classes.content}>FAQ</p>
            </NavLink>
            <NavLink to="*" className={classes.linkContent}>
              <p className={classes.content}>Help Desk</p>
            </NavLink>
            <NavLink to="*" className={classes.linkContent}>
              <p className={classes.content}>Contact Us</p>
            </NavLink>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
