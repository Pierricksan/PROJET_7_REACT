import "./Carroussel.css";
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Carroussel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ContainerStyle = {
    width: "600px",
    height: "200px",
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
    backgroundImage: `url(${slides[currentIndex].url})`,
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

  const numberSlide = {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    color: '#fff',
  }

  return (
    <Fragment>
      <div style={ContainerStyle}>
        <div style={sliderStyles}>
          <div style={leftArrowStyle} onClick={goToPrevious}>
            <FontAwesomeIcon icon={faChevronLeft} size="3x" />
          </div>
          <div style={rightArrowStyle} onClick={goToNext}>
            <FontAwesomeIcon icon={faChevronRight} size="3x" />
          </div>
          <img style={slideStyle} alt='logement'/>
          <div style={numberSlide}>{currentIndex + 1}/{slides.length}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Carroussel;
