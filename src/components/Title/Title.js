import { Fragment } from "react";
//import CSS
import "./Title.css";

// construction du component titre avec un titre principal et un second plus descriptif
const Title = ({ mainTitle, secondaryTitle }) => {
  return (
    <Fragment>
      <h1 className="mainTitleStyle">{mainTitle}</h1>
      <h2 className="secondaryTitleStyle">{secondaryTitle}</h2>
    </Fragment>
  );
};

export default Title;
