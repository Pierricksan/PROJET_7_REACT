import "./Rating.css";
import { Fragment } from "react";

const Rating = ({ countRating }) => {
  const starSharpedEmpty = (
    <svg
      width="30"
      height="30"
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

  const starSharpedFull = (
    <svg
      width="30"
      height="30"
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

  const numberRating = [Number(countRating), 5 - countRating];

  const displayRating = [];

  let a = 0;
  let b = 0;

  while (a < numberRating[0]) {
    a++;
    displayRating.push(starSharpedFull);
  }

  while (b < numberRating[1]) {
    b++;
    displayRating.push(starSharpedEmpty);
  }

  return (
    <Fragment>
      <div className="starsContainer">{displayRating}</div>
    </Fragment>
  );
};

export default Rating;
