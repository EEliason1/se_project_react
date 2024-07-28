import { useEffect, useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";

import "./App.css";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Profile from "../Profile/Profile.jsx";
import Footer from "../Footer/Footer.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { coordinates, APIkey } from "../../utils/constants.js";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import { deleteItem, getItems, postItem } from "../../utils/api.js";
import ItemDeleteModal from "../ItemDeleteModal/ItemDeleteModal.jsx";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: "",
    daylightHours: { sunrise: 0, sunset: 0 },
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const addModalEventListeners = () => {
    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("click", handleClickOutside);
  };

  const removeModalEventListeners = () => {
    document.removeEventListener("keydown", handleEscClose);
    document.removeEventListener("keydown", handleClickOutside);
  };

  const openModal = (modal) => {
    setActiveModal(modal);
    addModalEventListeners();
  };

  const openConfirmationModal = () => {
    closeActiveModal();
    setActiveModal("delete-item");
    addModalEventListeners();
  };

  const handleCardClick = (card) => {
    openModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    openModal("add-garment");
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleLogInClick = () => {
    openModal("login");
  };

  const handleSignUpClick = () => {
    openModal("register");
  };

  const handleLogIn = () => {};

  const handleSignUp = () => {};

  const closeActiveModal = () => {
    setActiveModal("");
    removeModalEventListeners();
  };

  const handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      closeActiveModal();
    }
  };

  const handleClickOutside = (evt) => {
    if (evt.target.classList.contains("modal")) {
      closeActiveModal();
    }
  };

  const handleAddItemSubmit = (item, handleItemStateReset) => {
    postItem(item)
      .then((res) => {
        setClothingItems((clothingItems) => [res, ...clothingItems]);
        handleItemStateReset();
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleDeteleClick = (item) => {
    deleteItem({ _id: item._id })
      .then(() => {
        setClothingItems((currentItems) =>
          currentItems.filter((clothingItem) => clothingItem._id !== item._id)
        );
        closeActiveModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredWeatherData = filterWeatherData(data);
        setWeatherData(filteredWeatherData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <div className="App__content">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            handleAddClick={handleAddClick}
            handleLoginClick={handleLogInClick}
            handleSignUpClick={handleSignUpClick}
            weatherData={weatherData}
            isLoggedIn={isLoggedIn}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  clothingItems={clothingItems}
                  handleCardClick={handleCardClick}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  handleAddClick={handleAddClick}
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
          </Routes>

          <Footer />
          {activeModal === "add-garment" && (
            <AddItemModal
              activeModal={activeModal}
              closeActiveModal={closeActiveModal}
              onAddItem={handleAddItemSubmit}
              isOpen={activeModal === "add-garment"}
            />
          )}
          <LoginModal
            handleCloseClick={closeActiveModal}
            isOpen={activeModal === "login"}
            handleSignUpClick={handleSignUpClick}
            onLogIn={handleLogIn}
          />
          <RegisterModal
            handleCloseClick={closeActiveModal}
            isOpen={activeModal === "register"}
            handleLogInClick={handleLogInClick}
            onSignUp={handleSignUp}
          />
          <ItemModal
            activeModal={activeModal}
            selectedCard={selectedCard}
            handleCloseClick={closeActiveModal}
            onOpenConfirm={openConfirmationModal}
          />
          <ItemDeleteModal
            activeModal={activeModal}
            handleCloseClick={closeActiveModal}
            handleDeteleClick={handleDeteleClick}
            clothingItem={selectedCard}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </div>
  );
}
