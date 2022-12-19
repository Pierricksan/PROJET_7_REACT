import React from "react";
import { Fragment, useState, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import SizeWindowHook from "../../components/SizeWindowHook/SizeWindowHook";
import imageAboutUsDesktop from "../../images/ImagesComponents/BannerAboutUsDesktop.png";
import imageAboutUsMobile from "../../images/ImagesComponents/BannerAboutUsMobile.png";

import "./Propos.css";

const Propos = () => {
  const screenWidth = SizeWindowHook().width;
  const [disableParallax, setdisableParallax] = useState(false);

  useEffect(() => {
    if (screenWidth <= 1300) {
      setdisableParallax(true);
    } else {
      setdisableParallax(false);
    }
  }, [screenWidth]);

  let bannerImageAbout = "";
  disableParallax
    ? (bannerImageAbout = imageAboutUsMobile)
    : (bannerImageAbout = imageAboutUsDesktop);

  return (
    <Fragment>
      <div className="bannerAbout">
        <Banner imageBanner={bannerImageAbout} descriptionAlt="un paysage montagneux enneigé et un beau temps avec une forêt d'arbres"/>
      </div>

      <div className="containerCollapseAboutUs">
        <Collapse label="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </Collapse>
        <Collapse label="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Collapse>
        <Collapse label="Service">
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </Collapse>
        <Collapse label="Sécurité">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </Collapse>
      </div>
    </Fragment>
  );
};

export default Propos;
