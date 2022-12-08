import React from "react";
import { Fragment } from "react";
import styles from "./Home.module.css";
import Banner from "../../components/Banner/Banner";
import Thumb from "../../components/Thumb/Thumb";
import image from "../../images/ImagesComponents/IMG.png";

const Home = () => {
  return (
    <Fragment>
      <Banner imageLayout={image}>Chez vous, partout et ailleurs</Banner>
      <div className={styles.flexHome}>
        <div className={styles.containerHomeLocations}>
          <Thumb>Titre de la location immobilière</Thumb>
          <Thumb>Titre de la location immobilière</Thumb>
          <Thumb>Titre de la location immobilière</Thumb>
          <Thumb>Titre de la location immobilière</Thumb>
          <Thumb>Titre de la location immobilière</Thumb>
          <Thumb>Titre de la location immobilière</Thumb>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
