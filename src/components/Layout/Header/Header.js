import React from "react";
import styles from "./Header.module.css";
import LOGO from "../imagesLayout/LOGO.svg";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = ({ menu }) => {
  return (
    <Fragment>
      <header className={styles.headerMenu}>
        <div>
          <img src={LOGO} alt="" />
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
