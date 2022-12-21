import { Fragment } from "react";
// import du css
import "./User.css";

// constrution du component avec l'avatar et le nom de l'utilisateur
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
