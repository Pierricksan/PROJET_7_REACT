import React from "react";
import { Fragment } from "react";
import Carroussel from "../../components/Carroussel/Carroussel";
import Collapse from "../../components/Collapse/Collapse";
import User from "../../components/User/User";
import "./FicheLogement.css";

import AVATAR from "../../images/ImagesComponents/avatarTest.jpg";

const slides = [
  { url: "https://via.placeholder.com/2000x600/0000FF/808080" },
  { url: "https://via.placeholder.com/150/FFFF00/000000" },
  { url: "https://via.placeholder.com/150/0000FF/808080" },
  { url: "https://via.placeholder.com/150/000000/FFFFFF" },
];

const FicheLogement = () => {
  const fontCollapse = {
    fontSize: "18px",
  };

  const fontContent = {
    fontSize: "14px",
  };

  return (
    <Fragment>
      <div className="containerCarroussel">
        <Carroussel slides={slides} />
      </div>
      <div className="containerInformations">
        <User avatarPicture={AVATAR} userName="Alexandre Dumas" />
        
      </div>
      <div className="containerCollapseLogement">
        <div className="containerDescription">
          <Collapse
            label="Description"
            fontCustom={fontCollapse}
            contentCustom={fontContent}
          ></Collapse>
        </div>
        <div className="containerEquipement">
          <Collapse
            label="Equipement"
            fontCustom={fontCollapse}
            contentCustom={fontContent}
          ></Collapse>
        </div>
      </div>
    </Fragment>
  );
};

export default FicheLogement;
