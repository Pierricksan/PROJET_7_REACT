import "./Rating.css";
import { Fragment, useState, useEffect } from "react";
import SizeWindowHook from '../SizeWindowHook/SizeWindowHook.js';


const Rating = ({ stars }) => {

  // import du windowsSize pour connaitre la taille de l'écran et changer la taille des étoiles
const screenWidth = SizeWindowHook().width
const [disableParallax, setdisableParallax] = useState(false);

useEffect(() => {
  if (screenWidth <= 768) {
    setdisableParallax(true);
  } else {
    setdisableParallax(false);
  }
}, [screenWidth]);

let starSize = "";
disableParallax ? starSize = "15" : starSize = "30";


  const svgStarFull = (
    <svg
      width={starSize}
      height={starSize}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
        fill="#FF6060"
      />
    </svg>
  );
  const svgEmptyStar = (
    <svg
      width={starSize}
      height={starSize}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
        fill="#E3E3E3"
      />
    </svg>
  );

const ratingStar = Array.from({length:5}, (element, index) => {

    return (
        <span className="starStyle" key={index}>
{ stars >= index +1 
    ? svgStarFull 
    : svgEmptyStar
}
        </span>
    )

})

  return (
    <Fragment>
  {ratingStar}
    </Fragment>
  );
};

export default Rating;
