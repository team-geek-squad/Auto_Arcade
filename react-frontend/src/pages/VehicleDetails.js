import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import classes from "./VehicleDetails.module.css";

import VehiclePhotoCarousel from "../components/VehiclePhotoCarousel";

const VehicleDetails = () => {
  return (
    <Container>
      <h3 className={classes.title}>Toyota Land Cruiser Prado 2014</h3>
      <p className={classes.location}>Katunayaka, Sri Lanka</p>
      <p className={classes.postedOn}>posted on 23rd March, 2023</p>
      <Row>
        <Col className="col-lg-6 col-12">
          <VehiclePhotoCarousel />
        </Col>
        <Col className="col-lg-6 col-12">
          <div className={classes.detailsDiv}>
            <p className={classes.postedByText}>posted by</p>
            <div className={classes.postedByDiv}>
              <div className={classes.postedByNameDiv}>
                <p className={classes.postedByName}>James Gorden</p>
              </div>
              <div className={classes.postedByPhoneDiv}></div>
              <div className={classes.postedByMessageDiv}></div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VehicleDetails;
