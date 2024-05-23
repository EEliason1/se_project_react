import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "",
  handleToggleSwitchChange: () => {
    console.log("working");
  },
});

export { CurrentTemperatureUnitContext };
