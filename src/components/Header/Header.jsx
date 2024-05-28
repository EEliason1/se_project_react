import "./Header.css";
import logo from "../../assets/wtwr.svg";
import avatar from "../../assets/sample-avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

export default function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="wtwr logo" className="header__logo" />
      </Link>
      <p className="header__location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
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
    </header>
  );
}
