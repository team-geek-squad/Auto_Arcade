import React, { useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import classes from "./BrandCarousel.module.css";

import toyotaLogo from "../assets/toyota-logo.png";
import leftArrowIcon from "../assets/left-arrow.png";
import rightArrowIcon from "../assets/right-arrow.png";

const BrandCarousel = () => {
  const brands = [
    { id: 1, logo: toyotaLogo, name: "Toyota" },
    { id: 2, logo: "", name: "Nissan" },
    { id: 3, logo: "", name: "Mitsubishi" },
    { id: 4, logo: "", name: "Honda" },
    { id: 5, logo: "", name: "Audi" },
    { id: 6, logo: "", name: "Benz" },
  ];

  const slider = useRef(null);

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={classes.brandCarousel}>
      <Slider {...settings} ref={slider}>
        {brands.map((brand) => {
          return (
            <div key={brand.id} className={classes.box}>
              <div className={classes.logoDiv}>
                <img src={brand.logo} alt="logo" className={classes.logo} />
              </div>
              <p className={classes.name}>{brand.name}</p>
            </div>
          );
        })}
      </Slider>
      <img
        src={leftArrowIcon}
        className="slick-prev"
        onClick={() => slider?.current?.slickPrev()}
      />
      <img
        src={rightArrowIcon}
        className="slick-next"
        onClick={() => slider?.current?.slickNext()}
      />
    </div>
  );
};

export default BrandCarousel;
