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
    if (screenWidth <= 768) {
      setModificationSize(true);
    } else {
      setModificationSize(false);
    }
  }, [screenWidth]);

  let chevronSize = "";
  modificationSize ? (chevronSize = "xl") : (chevronSize = "3x");

  const [currentIndex, setCurrentIndex] = useState(0);

  // gestion de l'image et implémentation par le props
  const slideStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex]})`,
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
    <div className="ContainerStyle">
      <div className="sliderStyles">
        <div style={slideStyle} role="img" alt="logement" />
      </div>
    </div>
  );

  const manySlides = (
    <div className="ContainerStyle">
      <div className="sliderStyles">
        <div className="leftArrowStyle" onClick={goToPrevious}>
          <FontAwesomeIcon icon={faChevronLeft} size={chevronSize} />
        </div>
        <div className="rightArrowStyle" onClick={goToNext}>
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
