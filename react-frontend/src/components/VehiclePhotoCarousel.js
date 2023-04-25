import React, { useState } from "react";

import classes from "./VehiclePhotoCarousel.module.css";

// Set the baseUrl to the image URL endpoint
const baseUrl = "https://picsum.photos";

const VehiclePhotoCarousel = () => {
  const [previewPhoto, setPreviewPhoto] = useState(
    `${baseUrl}/800/600?random=1`
  );

  const photoArray = [
    { id: 1, link: `${baseUrl}/800/800?random=1` },
    { id: 2, link: `${baseUrl}/500/600?random=2` },
    { id: 3, link: `${baseUrl}/200/600?random=3` },
    { id: 4, link: `${baseUrl}/800/500?random=4` },
  ];

  const handleClick = (id) => {
    const selectedPhoto = photoArray.find((photo) => photo.id === id);
    if (selectedPhoto) {
      setPreviewPhoto(selectedPhoto.link);
    }
  };

  return (
    <div className={classes.vehicleCarousel}>
      <div className={classes.MainPhotoDiv}>
        <img
          src={previewPhoto}
          className={classes.MainPhoto}
          alt="vehicle photo"
        />
      </div>
      <div className={classes.thumbnailDiv}>
        {photoArray.map((photo) => {
          return (
            <div
              className={classes.thumbnailPhotoDiv}
              key={photo.id}
              onClick={() => handleClick(photo.id)}
            >
              <img
                src={photo.link}
                className={classes.thumbnailPhoto}
                alt="thumbnail vehicle photos"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VehiclePhotoCarousel;
