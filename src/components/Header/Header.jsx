import "./Header.css";
import logo from "../../assets/wtwr.svg";
import avatar from "../../assets/sample-avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

export default function Header({
  handleAddClick,
  weatherData,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img src={logo} alt="" className="header__logo" />
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
      <div className="header__user-container">
        <p className="header__name">Evan Eliason</p>
        <img src={avatar} alt="" className="header__avatar" />
      </div>
    </header>
  );
}
