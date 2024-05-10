export const coordinates /*Tempe, AZ*/ = {
  latitude: 33.4255,
  longitude: -111.94,
};

export const APIkey = `5208c7092007d9f6459a43858e161272`;

export const weatherConditions = [
  {
    day: true,
    condition: "Clear",
    url: new URL("../assets/Day/clear.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "Clouds",
    url: new URL("../assets/Day/cloudy.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "Atmosphere",
    url: new URL("../assets/Day/cloudy.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "Fog",
    url: new URL("../assets/Day/fog.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "Rain",
    url: new URL("../assets/Day/rain.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "Drizzle",
    url: new URL("../assets/Day/rain.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "Snow",
    url: new URL("../assets/Day/snow.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "Thunderstorm",
    url: new URL("../assets/Day/storm.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "Clear",
    url: new URL("../assets/Night/clear.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "Clouds",
    url: new URL("../assets/Night/cloudy.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "Atmosphere",
    url: new URL("../assets/Night/cloudy.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "Fog",
    url: new URL("../assets/Night/fog.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "Rain",
    url: new URL("../assets/Night/rain.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "Drizzle",
    url: new URL("../assets/Night/rain.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "Snow",
    url: new URL("../assets/Night/snow.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "Thunderstorm",
    url: new URL("../assets/Night/storm.svg", import.meta.url).href,
  },
];

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];
