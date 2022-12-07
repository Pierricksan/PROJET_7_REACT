import { useState, useRef, Fragment } from "react";
import "./Collapse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({
  titleCustom,
  barCustom,
  contentCustom,
  label,
  children,
}) => {
  const [open, setOpen] = useState(false);

  const contentRef = useRef();

  const toggle = () => {
    setOpen(!open);
  };

  const collapseBar = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    borderRadius: "10px",
    backgroundColor: "#FF6060",
    padding: "10px",
    cursor: "pointer",
    position: "relative",
    zIndex: "1",
    height: "30px",
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

  return (
    <Fragment>
      <div className="collapseContainer">
        <div style={{ ...collapseBar, ...barCustom }} onClick={toggle}>
          <div style={{ ...barTitle, ...titleCustom }}>{label}</div>
          <div className="chevronIcon">
            {open ? (
              <FontAwesomeIcon icon={faChevronDown} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faChevronUp} size="lg" />
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
