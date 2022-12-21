import React from "react";
// import module
import { Fragment } from "react";
import { Link } from "react-router-dom";
// import css
import "./Erreur.css";

const Erreur = ({ errorType, returnPath, returnMessage, warningMessage }) => {
  return (
    <Fragment>
      <div className="errorPageStyle">
        <h1 className="errorServerMessage">{errorType}</h1>
        <p className="warning">{warningMessage}</p>
        <Link className="returnLinkStyle" to={returnPath}>
          {returnMessage}
        </Link>
      </div>
    </Fragment>
  );
};

export default Erreur;
