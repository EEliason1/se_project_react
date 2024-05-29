import { checkPromiseValidity } from "./utils.js";

export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(checkPromiseValidity);
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = {
    F: Math.round(data.main.temp),
    C: Math.round(((data.main.temp - 32) * 5) / 9),
  };
  result.condition = data.weather[0].main;
  result.daylightHours = {
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
  };
  result.isDay = isDay(result.daylightHours, Date.now());
  return result;
};

const isDay = ({ sunrise, sunset }, currentTime) => {
  return currentTime > sunrise * 1000 && currentTime < sunset * 1000;
};

export const getWeatherType = (temperature, unit) => {
  if (unit === "F") {
    if (temperature >= 85) {
      return "hot";
    } else if (temperature >= 65 && temperature < 85) {
      return "warm";
    } else {
      return "cold";
    }
  } else {
    if (temperature >= 29) {
      return "hot";
    } else if (temperature >= 18 && temperature < 29) {
      return "warm";
    } else {
      return "cold";
    }
  }
};
