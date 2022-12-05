import { Fragment } from "react";
import "./User.css";

const User = ({ avatarPicture, userName}) => {
  return (
    <Fragment>
      <div className="userInfoContainer">
        <div className="avatarContainer">
          <img src={avatarPicture} alt={`avatar de ${userName}`} />
          <div className="userNameInfo">
          <p>{userName}</p>
        </div>
        </div>
        
      </div>
    </Fragment>
  );
};

export default User
