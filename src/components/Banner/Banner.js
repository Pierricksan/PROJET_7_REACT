import React from "react";
import "./Banner.css";
import { Fragment } from "react";

const Banner = ({ children, imageBanner, descriptionAlt }) => {
  const containerBanner = {
    width: "100%",
    height: "100%",
    margin: "0 auto",
  };

  const bannerImageContainer = {
    height: "100%",
    position: "relative",
  };

  const bannerImage = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${imageBanner})`,
    border: "none",
    filter: "brightness(75%)",
  };

  return (
    <Fragment>
      <div style={containerBanner}>
        <div style={bannerImageContainer}>
          <div style={bannerImage} role="img" alt={descriptionAlt} />
          <div className="bannerTextContainer">
            <h1 className="textBanner">{children}</h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
