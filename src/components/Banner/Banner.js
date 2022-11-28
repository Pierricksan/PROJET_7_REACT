import React from "react";
import styles from "./Banner.module.css";

import { Fragment } from "react";

const Banner = ({ children, imageLayout }) => {
  return (
    <Fragment>
      <div className={styles.HeaderHome}>
        <div className={styles.containerImgBanner}>
          <img
            className={styles.ImgHeader}
            src={imageLayout} alt="" />
          <div className={styles.BannerText}>
            <h1>{children}</h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
