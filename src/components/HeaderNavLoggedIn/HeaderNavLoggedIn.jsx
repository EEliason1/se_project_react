import "./HeaderNavLoggedIn.css";
import { Link } from "react-router-dom";
import avatar from "../../assets/sample-avatar.svg";

const HeaderNavLoggedIn = ({ handleAddClick }) => {
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
          <p className="header__name">Evan Eliason</p>
          <img src={avatar} alt="avatar" className="header__avatar" />
        </div>
      </Link>
    </div>
  );
};

export default HeaderNavLoggedIn;
