import "./Carroussel.css";
import { Fragment, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SizeWindowHook from "../SizeWindowHook/SizeWindowHook.js";

const Carroussel = ({ slides }) => {
  const screenWidth = SizeWindowHook().width;
  const [modificationSize, setModificationSize] = useState(false);

  useEffect(() => {
    if (screenWidth <= 1300) {
      setModificationSize(true);
    } else {
      setModificationSize(false);
    }
  }, [screenWidth]);

  let chevronSize = "";
  modificationSize ? (chevronSize = "xl") : (chevronSize = "3x");

  const [currentIndex, setCurrentIndex] = useState(0);

  const ContainerStyle = {
    width: "100%",
    height: "100%",
    margin: "0 auto",
  };

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex]})`,
  };

  const leftArrowStyle = {
    position: "absolute",
    top: "50%",
    left: "10px",
    transform: "translate(0, -50%)",
    color: "#fff",
    cursor: "pointer",
  };

  const rightArrowStyle = {
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translate(0, -50%)",
    color: "#fff",
    cursor: "pointer",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const lengthSlide = slides.length === 1;

  const oneSlide = (
    <div style={ContainerStyle}>
      <div style={sliderStyles}>
        <div style={slideStyle} role="img" alt="logement" />
      </div>
    </div>
  );

  const manySlides = (
    <div style={ContainerStyle}>
      <div style={sliderStyles}>
        <div style={leftArrowStyle} onClick={goToPrevious}>
          <FontAwesomeIcon icon={faChevronLeft} size={chevronSize} />
        </div>
        <div style={rightArrowStyle} onClick={goToNext}>
          <FontAwesomeIcon icon={faChevronRight} size={chevronSize} />
        </div>
        <div style={slideStyle} role="img" alt="logement" />
        <div className="numberSlides">
          {currentIndex + 1}/{slides.length}
        </div>
      </div>
    </div>
  );

  return <Fragment>{lengthSlide ? oneSlide : manySlides}</Fragment>;
};

export default Carroussel;
