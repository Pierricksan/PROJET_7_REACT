import "./Slideshow.css";
import { Fragment } from "react";
import { Slide } from "react-slideshow-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  const buttonStyle = {
    width: "80px",
    background: "none",
    border: "0px",
  };

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <FontAwesomeIcon icon={faChevronLeft} size="5x" />
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <FontAwesomeIcon icon={faChevronRight} size="5x" />
      </button>
    ),
  };

  return (
    <Fragment>
      <div className="containerSlideshow">
        <Slide {...properties}>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[0]})` }}></div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[1]})` }}></div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[2]})` }}></div>
          </div>
        </Slide>
      </div>
    </Fragment>
  );
};

export default Slideshow;
