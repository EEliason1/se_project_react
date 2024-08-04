import "./HeaderNavLoggedIn.css";
import { Link } from "react-router-dom";
import avatar from "../../assets/sample-avatar.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const HeaderNavLoggedIn = ({ handleAddClick }) => {
  const currentUser = useContext(CurrentUserContext);
  const currentName = currentUser ? currentUser.name : "Undefined";
  const currentAvatar = currentUser?.avatar ? currentUser.avatar : avatar;

  return (
    <div className="header header_logged-in">
      <button
        className="header__add-button"
        type="button"
        onClick={handleAddClick}
      >
        + Add clothes
      </button>
      <Link to="/profile" className="header__link">
        <div className="header__user-container">
          <p className="header__name">{currentName}</p>
          <img src={currentAvatar} alt="avatar" className="header__avatar" />
        </div>
      </Link>
    </div>
  );
};

export default HeaderNavLoggedIn;
