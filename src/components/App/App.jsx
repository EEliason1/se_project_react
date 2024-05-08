import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";

export default function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });

  return (
    <div className="App">
      <div className="App__content">
        <Header />
        <Main weatherData={weatherData} />
        <Footer />
      </div>
    </div>
  );
}
