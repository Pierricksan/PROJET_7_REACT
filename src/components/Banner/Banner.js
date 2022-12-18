import React from "react";


import { Fragment } from "react";

const Banner = ({ children, imageBanner }) => {


  const containerBanner = {
    width: "100%",
    height: "100%",
    margin: "0 auto",
  }

  const bannerImageContainer = {
    height: "100%",
    position: "relative",
  }

  const bannerImage = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${imageBanner})`,
  }

  const bannerTextContainer = {
    position : "absolute",
    textAlign: "center",
    fontSize: "24px",
    color: "#fff",
    top: "40%",
    width: "100%",
    
  }

  const textBanner = {
    fontWeight: "500",   
    margin: "0",
  }

  return (
    <Fragment>
      <div style={containerBanner}>
        <div style={bannerImageContainer}>
          <div style={bannerImage}
            role="img" alt="" />
          <div style={bannerTextContainer}>
            <h1 style={textBanner}>{children}</h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
