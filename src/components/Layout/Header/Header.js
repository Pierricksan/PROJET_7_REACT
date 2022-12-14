import React from "react";
import styles from "./Header.module.css";
// import LOGO from "../imagesLayout/LOGO.svg";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = ({ menu, imageHeader, altImgHeader }) => {
  return (
    <Fragment>
      <header className={styles.headerMenu}>
        <div className={styles.headerLogo}>
          <img src={imageHeader} alt={altImgHeader} />
        </div>
        <nav className={styles.navBar}>
          {menu.map(({ onglet, chemin }, index) => {
            return (
              <Fragment key={index}>
                <Link className={styles.navLink} to={chemin}>
                  {onglet}
                </Link>
              </Fragment>
            );
          })}
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
