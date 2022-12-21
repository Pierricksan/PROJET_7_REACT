import { useState, useRef, Fragment, useEffect } from "react";
// import css
import "./Collapse.css";
// import module 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import component 
import SizeWindowHook from "../SizeWindowHook/SizeWindowHook.js";

const Collapse = ({ titleCustom, contentCustom, label, children }) => {
  // construction du hook d'état pour l'ouverture et fermeture du collapse
  const [open, setOpen] = useState(false);
  const contentRef = useRef();
  const toggle = () => {
    setOpen(!open);
  };

  // import du windowsSize pour connaitre la taille de l'écran et changer la taille des étoiles
  const screenWidth = SizeWindowHook().width;
  const [modificationSize, setModificationSize] = useState(false);

  useEffect(() => {
    if (screenWidth <= 1300) {
      setModificationSize(true);
    } else {
      setModificationSize(false);
    }
  }, [screenWidth]);

  let chevronSize = "";
  modificationSize ? (chevronSize = "sm") : (chevronSize = "lg");

  const barTitleStyle = {
    textAlign: "center",
  };

  const content = {
    padding: "20px",
    color: "#ff6060",
    fontWeight: "400",
  };

  return (
    <Fragment>
      <div className="collapseContainer">
        <div className="collapseBar" onClick={toggle}>
          <h2 style={{ ...barTitleStyle, ...titleCustom }}>{label}</h2>
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
          <div style={{ ...content, ...contentCustom }}>
            <p className="paragraphCollapse">{children}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Collapse;
