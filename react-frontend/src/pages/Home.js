import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import classes from "./Home.module.css";

import HomePageSectionTitle from "../components/HomePageSectionTitle";
import WhyAutoArcadeComponent from "../components/WhyAutoArcadeComponent";
import RecentPreviewsComponent from "../components/RecentPreviewsComponent";
import BrandCarousel from "../components/BrandCarousel";

import toyotaLandCruiser from "../assets/toyota-land-cruiser.png";

const Home = () => {
  const whyAutoArcade = [
    {
      id: 1,
      title: "transparent pricing",
      content:
        "No suprise fees here. You will exaclty know how much you will pay",
      icon: "star",
    },
    {
      id: 2,
      title: "transparent pricing",
      content:
        "No suprise fees here. You will exaclty know how much you will pay",
      icon: "bolt",
    },
    {
      id: 3,
      title: "transparent pricing",
      content:
        "No suprise fees here. You will exaclty know how much you will pay",
      icon: "person",
    },
    {
      id: 4,
      title: "transparent pricing",
      content:
        "No suprise fees here. You will exaclty know how much you will pay",
      icon: "travel_explore",
    },
  ];

  const recentPreviews = [
    {
      id: 1,
      name: "Toyota Corolla Hybrid",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      price: 6000000,
      location: "Kiribathgoda",
      photo: "https://picsum.photos/200/200?random=4",
    },
    {
      id: 2,
      name: "Nissan super saloon fb15",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      price: 6000000,
      location: "Kiribathgoda",
      photo: "https://picsum.photos/200/200?random=4",
    },
    {
      id: 3,
      name: "Toyota Prius",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      price: 6000000,
      location: "Kiribathgoda",
      photo: "https://picsum.photos/200/200?random=4",
    },
  ];

  return (
    <>
      <div id='homeSection' className={classes.heroSection}>
        <div className={classes.overlay}></div>
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
          <Row className="row-cols-2 g-4">
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
          <Row className="row-cols-3 g-5">
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
