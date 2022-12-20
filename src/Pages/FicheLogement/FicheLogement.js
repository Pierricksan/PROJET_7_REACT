import React from "react";
import { Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Carroussel from "../../components/Carroussel/Carroussel";
import Collapse from "../../components/Collapse/Collapse";
import User from "../../components/User/User";
import Title from "../../components/Title/Title";
import Tag from "../../components/Tag/Tag";
import Rating from "../../components/Rating/Rating";
import "./FicheLogement.css";

import dataLogement from "../../API/annonce.json";


const FicheLogement = () => {
  /// navigate
  const navigate = useNavigate();

  //// UseParams pour l'url
  let { id } = useParams();
  const idLogement = dataLogement.find(p => p.id === id);

  useEffect(() => {
    if (idLogement === undefined) {
      navigate("/erreur");
    }
  });

  const fontContent = {
    paddingTop: "20px",
    paddingBottom: "20px",
    textDecoration: "none",
  };

  if (idLogement !== undefined) {
    return (
      <Fragment>
        <div className="containerCarroussel">
          <Carroussel slides={idLogement.pictures} />
        </div>
        <div className="containerInformations">
          <div className="titleAndTags">
            <div className="infoTitle">
              <Title
                mainTitle={idLogement.title}
                secondaryTitle={idLogement.location}
              />
            </div>
            <div className="infoTags">
              {idLogement.tags.map((tags, index) => {
                return <Tag key={index}>{tags}</Tag>;
              })}
            </div>
          </div>
          <div className="userAndRating">
            <div className="infoUser">
              <User
                avatarPicture={idLogement.host.picture}
                userName={idLogement.host.name}
              />
            </div>
            <div className="infoRating">
              <Rating stars={idLogement.rating} />
            </div>
          </div>
        </div>
        <div className="containerCollapseLogement">
          <div className="containerDescription">
            <Collapse
              label="Description"
              contentCustom={fontContent}
            >
              {idLogement.description}
            </Collapse>
          </div>
          <div className="containerEquipement">
            <Collapse
              label="Equipement"
              contentCustom={fontContent}
            >
              {idLogement.equipments.map((equipments, index) => {
                return <li key={index}>{equipments}</li>;
              })}
            </Collapse>
          </div>
        </div>
      </Fragment>
    );
  }
};

export default FicheLogement;
