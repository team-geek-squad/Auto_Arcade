import Slider from "react-slick";

import "./VehiclePhotoCarousel.css";

// Set the baseUrl to the image URL endpoint
const baseUrl = "https://picsum.photos";

const VehiclePhotoCarousel = () => {
  const photoArray = [
    { id: 1, link: `${baseUrl}/800/600?random=1` },
    { id: 2, link: `${baseUrl}/800/600?random=2` },
    { id: 3, link: `${baseUrl}/800/600?random=3` },
    { id: 4, link: `${baseUrl}/800/600?random=4` },
  ];

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <div className="vehicleCarouselThumbnailDiv">
            <img
              src={`${baseUrl}/800/600?random=${i + 1}`}
              alt={`Slide ${i + 1}`}
              className="vehicleCarouselThumbnailPhoto"
            />
          </div>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="vehicleCarousel">
      <Slider {...settings}>
        {photoArray.map((photoItem) => {
          return (
            <div key={photoItem.id} className="vehicleCarouselMainPhotoDiv">
              <img
                src={photoItem.link}
                className="vehicleCarouselMainPhoto"
                alt={`Slide ${photoItem.id}`}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default VehiclePhotoCarousel;
