import "./Header.css";
import logo from "../../assets/wtwr.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import HeaderNavLoggedOut from "../HeaderNavLoggedOut/HeaderNavLoggedOut";
import HeaderNavLoggedIn from "../HeaderNavLoggedIn/HeaderNavLoggedIn";

export default function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  handleLoginClick,
  handleSignUpClick,
}) {
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
      {isLoggedIn ? (
        <HeaderNavLoggedIn handleAddClick={handleAddClick} />
      ) : (
        <HeaderNavLoggedOut
          handleLoginClick={handleLoginClick}
          handleSignUpClick={handleSignUpClick}
        />
      )}
    </header>
  );
}
