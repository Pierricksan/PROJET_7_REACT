import "./Title.css";
import { Fragment } from "react";

const Title = ({ mainTitle, secondaryTitle }) => {
  const mainTitleStyle = {
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: "36px",
    color: "#ff6060",
    margin: "0px 0px 10px",
  };

  const secondaryTitleStyle = {
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: "18px",
    color: "#ff6060",
    margin: "0px",
  };

  return (
    <Fragment>
      <h1 style={{ ...mainTitleStyle }}>{mainTitle}</h1>
      <h2 style={{ ...secondaryTitleStyle }}>{secondaryTitle}</h2>
    </Fragment>
  );
};

export default Title;
