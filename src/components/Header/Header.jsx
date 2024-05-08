import "./Header.css";
import logo from "../../assets/wtwr.svg";
import avatar from "../../assets/sample-avatar.svg";

export default function Header({ handleAddClick }) {
  return (
    <header className="header">
      <img src={logo} alt="" className="header__logo" />
      <p className="header__location">June 15, New York</p>
      <button
        className="header__add-button"
        type="button"
        onClick={handleAddClick}
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__name">Evan Eliason</p>
        <img src={avatar} alt="" className="header__avatar" />
      </div>
    </header>
  );
}
