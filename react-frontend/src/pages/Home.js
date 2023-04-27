import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import classes from "./Home.module.css";

import HomePageSectionTitle from "../components/HomePageSectionTitle";
import WhyAutoArcadeComponent from "../components/WhyAutoArcadeComponent";
import RecentPreviewsComponent from "../components/RecentPreviewsComponent";
import BrandCarousel from "../components/BrandCarousel";

import toyotaLandCruiser from "../assets/toyota-land-cruiser.png";
import toyotaCorolla from "../assets/toyota-corolla.jpg";
import nissanSuperSaloon from "../assets/nissan-super-saloon.jpg";
import toyotaPrius from "../assets/toyota-prius.jpeg";

const Home = () => {
  const whyAutoArcade = [
    {
      id: 1,
      title: "transparent pricing",
      content:
        "No suprise fees here. You will exaclty know how much you will pay",
      icon: "verified",
    },
    {
      id: 2,
      title: "reserve your vehicle online",
      content:
        "Make a online payment to the seller and reserve your dream vehicle",
      icon: "shopping_cart",
    },
    {
      id: 3,
      title: "24x7 Customer Service",
      content:
        "We are here everday and everytime, to make sure your deals go smoothly and securely",
      icon: "support_agent",
    },
    {
      id: 4,
      title: "island-wide deals",
      content:
        "We facilate you buy or sell your vehicle, no matter where you live in Sri Lanka",
      icon: "travel_explore",
    },
  ];

  const recentPreviews = [
    {
      id: 1,
      name: "Toyota Axio WXB 2018",
      description:
        "Manufactured - Sep 2018, Registered - 2019, Hybrid, CBD Series, Mint Condition, Doctor Used, Urgent Migration",
      mileage: 87000,
      price: 10900000,
      location: "Kiribathgoda",
      photo: toyotaCorolla,
    },
    {
      id: 2,
      name: "Nissan Sunny FB15 super saloon 2003",
      description:
        "2005 registration, New Shell, 2nd Owner, Clear Documents, Used Contition",
      mileage: 120000,
      price: 4150000,
      location: "Pannipitiya",
      photo: nissanSuperSaloon,
    },
    {
      id: 3,
      name: "Toyota Prius G Touring 2013",
      description:
        "Prius 3rd Gen, G Touring. 1st Owner, Used Condition, 1,500 cc Engine Capacity",
      mileage: 90000,
      price: 8300000,
      location: "Katunayaka",
      photo: toyotaPrius,
    },
  ];

  return (
    <>
      <div id="homeSection" className={classes.heroSection}>
        <div className={classes.overlay}>
          <div className={classes.heroContent}>
            <p className={classes.exploreDeals}>Explore deals</p>
            <div className={classes.searchDiv}>
              <input
                type="text"
                className={classes.searchBar}
                placeholder="Search by brand, model, type..."
              />
              <button className={classes.searchButton}>
                <p className={classes.searchButtonText}>Search</p>
              </button>
            </div>
            {/* <div className={classes.locationDiv}>
              <div className={classes.locationContent}>
                <span
                  className={`material-symbols-outlined ${classes.locationIcon}`}
                >
                  location_on
                </span>
                <p className={classes.homeLocation}>Wattala, Sri Lanka</p>
              </div>
              <button className={classes.locationButton}>
                <p className={classes.locationButtonText}>Change</p>
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <Container>
        <div className={classes.section}>
          <HomePageSectionTitle title="Browse by brand" />
          <BrandCarousel />
        </div>
        <div className={classes.section}>
          <div className={classes.firstDealBanner}>
            <div className={classes.bannerTextBox}>
              <p className={classes.bannerWhiteText}>make your first deal</p>
              <p className={classes.bannerWhiteText}>
                and stand a chance to win a
              </p>
              <p className={classes.bannerHighlightedText}>
                toyota land cruiser
              </p>
              <div className={classes.seeMoreBox}>
                <p className={classes.bannerSeeMore}>
                  see more details &gt;&gt;&gt;
                </p>
              </div>
            </div>
            <img
              src={toyotaLandCruiser}
              alt="toyota"
              className={classes.bannerImg}
            />
          </div>
        </div>
        <div className={classes.section}>
          <HomePageSectionTitle title="why auto arcade ?" />
          <Row className="row-cols-lg-2 row-cols-1 g-4">
            {whyAutoArcade.map((data) => {
              return (
                <Col key={data.id}>
                  <WhyAutoArcadeComponent data={data} />
                </Col>
              );
            })}
          </Row>
        </div>
        <div className={classes.section}>
          <HomePageSectionTitle title="recent previews" />
          <Row className="row-cols-lg-3 row-cols-1 g-5">
            {recentPreviews.map((data) => {
              return (
                <Col key={data.id}>
                  <RecentPreviewsComponent data={data} />
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Home;
