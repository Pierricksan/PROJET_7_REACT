import React from "react";
// import page CSS 
import "./PageErreur404.css";
// import component
import Erreur from "../../components/Erreur/Erreur";
// import module
import { Fragment } from "react";

// construction de la fonction page Erreur 404 avec le component Erreur
const PageErreur404 = () => {
  return (
    <Fragment>
      <div className="pageErreurNotFound">
        <Erreur
          errorType="404"
          warningMessage="Oups ! La page que vous demandez n'existe pas ..."
          returnPath="/"
          returnMessage="Retournez sur la page d'accueil"
        />
      </div>
    </Fragment>
  );
};
export default PageErreur404;
