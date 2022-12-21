import React from "react";
// import du CSS
import "./Header.css";
// import LOGO from "../imagesLayout/LOGO.svg";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = ({ menu, imageHeader, altImgHeader }) => {
  return (
    <Fragment>
      <header className="headerMenu">
        <div className="headerLogo">
          <img src={imageHeader} alt={altImgHeader} />
        </div>
        <nav className="navBar">
          {menu.map(({ onglet, chemin }, index) => {
            return (
              <Fragment key={index}>
                <Link className="navLink" to={chemin}>
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
