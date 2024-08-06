import "./WeatherCard.css";
import React, { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { weatherConditions } from "../../utils/constants";

export default function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const isDay = weatherData.isDay;
  const currentCondition = weatherData.condition;

  const filteredOptions = weatherConditions.find((option) => {
    return option.day === isDay, option.condition === currentCondition;
  });

  const weatherCondition = filteredOptions?.url;

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData?.temp?.[currentTemperatureUnit]}°{currentTemperatureUnit}
      </p>
      <img
        src={weatherCondition}
        alt={filteredOptions?.condition}
        className="weather-card__background"
      />
    </section>
  );
}
