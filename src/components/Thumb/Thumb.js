import React from "react";
import { Fragment } from "react";
import "./Thumb.css";

const Thumb = ({ sourceImg, children }) => {

    const thumbImgStyle = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        // cover ou contain à décider
        backgroundSize: "cover", 
        backgroundImage: `url(${sourceImg})`,
      };

  return (
    <Fragment>
      <div className="containerThumb">
        <div className="contentThumb">
          <div style={thumbImgStyle} alt="" />
          <div className="titleLocation">
            <h2>{children}</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Thumb;
