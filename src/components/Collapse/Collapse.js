import { useState, useRef, Fragment, useEffect } from "react";
import "./Collapse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SizeWindowHook from '../SizeWindowHook/SizeWindowHook.js';

const Collapse = ({
  titleCustom,
  contentCustom,
  label,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef();
  const toggle = () => {
    setOpen(!open);
  };

  const barTitle = {
    textAlign: "center",
    fontSize: "24px",
  };

  const content = {
    padding: "20px",
    fontSize: "24px",
    color: "#ff6060",
    fontWeight: "400",
  };


    // import du windowsSize pour connaitre la taille de l'écran et changer la taille des étoiles
const screenWidth = SizeWindowHook().width
const [disableParallax, setdisableParallax] = useState(false);

useEffect(() => {
  if (screenWidth <= 1300) {
    setdisableParallax(true);
  } else {
    setdisableParallax(false);
  }
}, [screenWidth]);

let chevronSize = "";
disableParallax ? chevronSize = "sm" : chevronSize = "lg";

  return (
    <Fragment>
      <div className="collapseContainer">
        <div className="collapseBar" onClick={toggle}>
          <div style={{ ...barTitle, ...titleCustom }} className="">{label}</div>
          <div className="chevronIcon">
            {open ? (
              <FontAwesomeIcon icon={faChevronDown} size={chevronSize} />
            ) : (
              <FontAwesomeIcon icon={faChevronUp} size={chevronSize} />
            )}
          </div>
        </div>
        <div
          className="content-parent"
          ref={contentRef}
          style={
            open
              ? { height: contentRef.current.scrollHeight + "px" }
              : { height: "0px" }
          }
        >
          <div style={{ ...content, ...contentCustom }}>{children}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Collapse;
