import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import classes from "./VehicleDetails.module.css";

import VehiclePhotoCarousel from "../components/VehiclePhotoCarousel";

const VehicleDetails = () => {
  return (
    <>
      <div className={classes.warningDiv}>
        <p className={classes.warningText}>
          Attention! To protect yourself and your personal information from
          online scammers, never share sensitive details such as credit/debit
          card numbers, OTP messages, or other confidential information with
          third parties.
        </p>
      </div>
      <Container>
        <h3 className={classes.title}>Toyota Land Cruiser Prado 2014</h3>
        <p className={classes.location}>Katunayaka, Sri Lanka</p>
        <p className={classes.postedOn}>posted on 23rd March, 2023</p>
        <Row className="gy-lg-0 gy-3">
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
                <div className={classes.postedByPhoneDiv}>
                  <span
                    className={`${classes.postedByIcon} material-symbols-outlined`}
                  >
                    call
                  </span>
                </div>
                <div className={classes.postedByMessageDiv}>
                  <span
                    className={`${classes.postedByIcon} material-symbols-outlined`}
                  >
                    chat
                  </span>
                </div>
              </div>
              <div className={classes.priceDiv}>
                <p className={classes.priceText}>Rs 29,800,000</p>
              </div>
              <div className={classes.specsDiv}>
                <p className={classes.specsItem}>
                  <span className={classes.specsItemTitle}>Brand : </span>Toyota
                </p>
                <p className={classes.specsItem}>
                  <span className={classes.specsItemTitle}>Model : </span>Land
                  Cruiser Prado
                </p>
                <p className={classes.specsItem}>
                  <span className={classes.specsItemTitle}>
                    Year of Manufacture :
                  </span>
                  2014
                </p>
                <p className={classes.specsItem}>
                  <span className={classes.specsItemTitle}>Condition : </span>
                  Used
                </p>
                <p className={classes.specsItem}>
                  <span className={classes.specsItemTitle}>
                    Transmission :{" "}
                  </span>
                  Automatic
                </p>
                <p className={classes.specsItem}>
                  <span className={classes.specsItemTitle}>Body Type : </span>
                  SUV / 4x4
                </p>
                <p className={classes.specsItem}>
                  <span className={classes.specsItemTitle}>Fuel type : </span>
                  Diesel
                </p>
                <p className={classes.specsItem}>
                  <span className={classes.specsItemTitle}>
                    Engine Capacity :{" "}
                  </span>
                  3,000 cc
                </p>
                <p className={classes.specsItem}>
                  <span className={classes.specsItemTitle}>Mileage : </span>
                  89,000 km
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <div className={classes.descriptionDiv}>
          <p className={classes.descriptionTitle}>Description</p>
          <div className={classes.descriptionContentDiv}>
            <p className={classes.descriptionContent}>
              previous one owner
              <br />
              dual line A/C
              <br />
              360 4way camera
              <br />
              genuine mileage
              <br />
              personal home use
              <br />
              good conditiin
              <br />
              beige interior
              <br />
              cool box
              <br />
              original face
              <br />
              green colour
              <br />
              toyota lanka brand new importad
              <br />
              company maintained service record available
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default VehicleDetails;
