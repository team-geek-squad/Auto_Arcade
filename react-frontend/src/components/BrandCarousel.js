import React, { useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import classes from "./BrandCarousel.module.css";

import toyotaLogo from "../assets/toyota-logo.png";
import mitsubishiLogo from "../assets/mitsubishi-logo.png";
import hondaLogo from "../assets/honda-logo.png";
import audiLogo from "../assets/audi-logo.png";
import benzLogo from "../assets/benz-logo.png";
import nissanLogo from "../assets/nissan-logo.png";
import leftArrowIcon from "../assets/left-arrow.png";
import rightArrowIcon from "../assets/right-arrow.png";

const BrandCarousel = () => {
  const brands = [
    { id: 1, logo: toyotaLogo, name: "Toyota" },
    { id: 2, logo: nissanLogo, name: "Nissan" },
    { id: 3, logo: mitsubishiLogo, name: "Mitsubishi" },
    { id: 4, logo: hondaLogo, name: "Honda" },
    { id: 5, logo: audiLogo, name: "Audi" },
    { id: 6, logo: benzLogo, name: "Mercedes-Benz" },
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
