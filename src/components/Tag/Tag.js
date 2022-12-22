import "./Tag.css";
import { Fragment } from "react";


// component Tag pour afficher les particularités/étiquettes d'une entitée spécifique
const Tag = ({ children }) => {
  return (
    <Fragment>
      <div className="containerTag">
        <p>{children}</p>
      </div>
    </Fragment>
  );
};

export default Tag;
