import { useState, useRef, Fragment } from "react";
import "./Collapse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ label, children }) => {
  const [open, setOpen] = useState(false);

  const contentRef = useRef();

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <div className="collapseContainer">
        <div className="collapseBar" onClick={toggle}>
          <div className="barTitle">{label}</div>

          <div className="chevronIcon">
            {open ? (
              <FontAwesomeIcon icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon icon={faChevronUp} />
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
          <div className="content">{children}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Collapse;
