import React from "react";
import styles from "./HeaderPage.module.css";

import { Fragment } from "react";

const HeaderPage = ({ children, imageLayout }) => {
  return (
    <Fragment>
      <div className={styles.HeaderHome}>
        <div className={styles.containerImgHeader}>
          <img
            className={styles.ImgHeader}
            src={imageLayout} alt="" />
          <div className={styles.HeaderHomeText}>
            <h1>{children}</h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderPage;
