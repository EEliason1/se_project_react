import "./WeatherCard.css";

import { weatherConditions } from "../../utils/constants";

export default function WeatherCard({ weatherData }) {
  const filteredOptions = weatherConditions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const weatherCondition = filteredOptions[0]?.url;

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F.toFixed(0)}&deg;</p>
      <img src={weatherCondition} alt="" className="weather-card__background" />
    </section>
  );
}
