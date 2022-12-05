import { Fragment } from "react";
import "./User.css";

const User = ({ avatarPicture, userName }) => {
  return (
    <Fragment>
      <div className="userInfoContainer">
        <div className="avatarContainer">
          <img src={avatarPicture} alt={`avatar de ${userName}`} />
        </div>
        <span className="userNameInfo">{userName}</span>
      </div>
    </Fragment>
  );
};

export default User;
