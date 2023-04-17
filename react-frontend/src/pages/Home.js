import classes from "./Home.module.css";

import heroImage from "../assets/hero-car-image.jpg";

const Home = () => {
  return (
    <>
      <div className={classes.heroSection}>
        <div className={classes.overlay}></div>
      </div>
    </>
  );
};

export default Home;
