import React from "react";
import { Fragment } from "react";
import Carroussel from "../../components/Carroussel/Carroussel";
import Collapse from "../../components/Collapse/Collapse";
import User from "../../components/User/User";
import Title from "../../components/Title/Title";
import Tag from "../../components/Tag/Tag";
import Rating from "../../components/Rating/Rating";

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
    fontSize: "18px",
  };

  return (
    <Fragment>
      <div className="containerCarroussel">
        <Carroussel slides={slides} />
      </div>
      <div className="containerInformations">
        <Title
          mainTitle="Super Appartement Cosy"
          secondaryTitle="Information décrivant le logement"
        />
        <Tag>Cozy</Tag>
        <Tag>Habitable</Tag>
        <Tag>Soft</Tag>
        <Rating countRating="2"/>
        <User avatarPicture={AVATAR} userName="Alexandre Dumas" />
      </div>
      <div className="containerCollapseLogement">
        <div className="containerDescription">
          <Collapse
            label="Description"
            fontCustom={fontCollapse}
            contentCustom={fontContent}
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Collapse>
        </div>
        <div className="containerEquipement">
          <Collapse
            label="Equipement"
            fontCustom={fontCollapse}
            contentCustom={fontContent}
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Collapse>
        </div>
      </div>
    </Fragment>
  );
};

export default FicheLogement;
