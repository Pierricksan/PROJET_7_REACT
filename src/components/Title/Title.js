import "./Title.css";
import { Fragment } from "react";

const Title = ({ mainTitle, secondaryTitle }) => {
 
  return (
    <Fragment>
      <h1 className="mainTitleStyle">{mainTitle}</h1>
      <h2 className="secondaryTitleStyle">{secondaryTitle}</h2>
    </Fragment>
  );
};

export default Title;
