import React from "react";
import "./PageErreur404.css";
import Erreur from "../../components/Erreur/Erreur";
import { Fragment } from "react";

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
