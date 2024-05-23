import React, { useContext } from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

export default function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggle" htmlFor="tempToggle">
      <input
        className="toggle__container"
        type="checkbox"
        name="tempToggle"
        onClick={handleToggleSwitchChange}
      />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "toggle__slider toggle__slider-F"
            : "toggle__slider toggle__slider-C"
        }
        onClick={handleToggleSwitchChange}
      ></span>
      <p
        className={`toggle__temp-F ${
          currentTemperatureUnit === "F" && "toggle__active"
        }`}
        onClick={handleToggleSwitchChange}
      >
        F
      </p>
      <p
        className={`toggle__temp-C ${
          currentTemperatureUnit === "C" && "toggle__active"
        }`}
        onClick={handleToggleSwitchChange}
      >
        C
      </p>
    </label>
  );
}
