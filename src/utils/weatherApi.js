const checkPromiseValidity = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(checkPromiseValidity);
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = {
    F: data.main.temp,
    C: ((data.main.temp - 32) * (5 / 9)).toFixed(2),
  };
  result.condition = data.weather[0].main;
  result.daylightHours = {
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
  };
  result.isDay = isDay(result.daylightHours, Date.now());
  result.type = getWeatherType(result.temp.F);
  return result;
};

const isDay = ({ sunrise, sunset }, currentTime) => {
  return currentTime > sunrise * 1000 && currentTime < sunset * 1000;
};

const getWeatherType = (temperature) => {
  if (temperature >= 85) {
    return "hot";
  } else if (temperature >= 65 && temperature < 85) {
    return "warm";
  } else {
    return "cold";
  }
};
