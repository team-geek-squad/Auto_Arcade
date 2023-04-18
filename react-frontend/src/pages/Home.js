import Container from "react-bootstrap/Container";

import classes from "./Home.module.css";

import HomePageSectionTitle from "../components/HomePageSectionTitle";

const Home = () => {
  return (
    <>
      <div className={classes.heroSection}>
        <div className={classes.overlay}></div>
      </div>
      <div className="container">
        <div className={classes.section}>
          <HomePageSectionTitle title="Browse by brand" />
          slick carousel
        </div>
      </div>
    </>
  );
};

export default Home;
