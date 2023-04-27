import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { numberWithCommas } from "../utils/format";

import classes from "./RecentPreviewsComponent.module.css";

const recentPreviewsComponent = ({ data }) => {
  return (
    <Row className={`gx-3 gx-lg-0 ${classes.component}`}>
      <Col className={`col-lg-12 col-4 ${classes.imgDiv}`}>
        <img src={data.photo} alt="photo" className={classes.img} />
      </Col>
      <Col className={`col-lg-12 col-8 ${classes.content}`}>
        <h5 className={classes.name}>{data.name}</h5>
        <p className={classes.description}>{data.description}</p>
        <div className={classes.locationDiv}>
          <span class={`material-symbols-outlined ${classes.icon}`}>
            location_on
          </span>
          <p className={classes.location}>{data.location}</p>
        </div>
        <div className={classes.priceDiv}>
          <span class={`material-symbols-outlined ${classes.icon}`}>
            payments
          </span>
          <p className={classes.price}>{numberWithCommas(data.price)} LKR</p>
        </div>
      </Col>
    </Row>
  );
};

export default recentPreviewsComponent;
