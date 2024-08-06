import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

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
import {
  deleteItem,
  getItems,
  postItem,
  updateUser,
  addCardLike,
  removeCardLike,
} from "../../utils/api.js";
import ItemDeleteModal from "../ItemDeleteModal/ItemDeleteModal.jsx";
import { signin, signup, checkToken } from "../../utils/auth.js";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    avatar: "",
    _id: "",
    __v: "",
  });
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
  const [isLoading, setIsLoading] = useState(false);

  const openModal = (modal) => {
    setActiveModal(modal);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const openConfirmationModal = () => {
    closeActiveModal();
    openModal("delete-item");
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

  const handleLogIn = (userInfo) => {
    setIsLoading(true);
    signin(userInfo)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSignUp = (newUserInfo) => {
    setIsLoading(true);
    signup(newUserInfo)
      .then(() => {
        handleLogIn(newUserInfo);
        closeActiveModal();
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleAddItemSubmit = (item, handleItemStateReset) => {
    const token = localStorage.getItem("jwt");
    setIsLoading(true);
    postItem(item, token)
      .then((res) => {
        setClothingItems((clothingItems) => [res.data, ...clothingItems]);
        handleItemStateReset();
        closeActiveModal();
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleDeteleClick = (item) => {
    const token = localStorage.getItem("jwt");
    setIsLoading(true);
    deleteItem({ _id: item._id }, token)
      .then(() => {
        setClothingItems((currentItems) =>
          currentItems.filter((clothingItem) => clothingItem._id !== item._id)
        );
        closeActiveModal();
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLogOutClick = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
  };

  const handleProfileEditClick = () => {
    openModal("profile-edit");
  };

  const handleProfileEditSubmit = (newInfo) => {
    const token = localStorage.getItem("jwt");
    setIsLoading(true);
    updateUser(newInfo, token)
      .then((res) => {
        setCurrentUser(res);
        closeActiveModal();
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCardLike = ({ _id }, isLiked) => {
    const token = localStorage.getItem("jwt");

    !isLiked
      ? addCardLike(_id, token)
          .then((updatedCard) => {
            setClothingItems(
              clothingItems.map((item) =>
                item._id === _id ? updatedCard.data : item
              )
            );
          })
          .catch(console.error)
      : removeCardLike(_id, token)
          .then((updatedCard) => {
            setClothingItems(
              clothingItems.map((item) =>
                item._id === _id ? updatedCard.data : item
              )
            );
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

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((res) => {
          setIsLoggedIn(true);
          setCurrentUser(res);
        })
        .catch(console.error);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        closeActiveModal();
      }
    };

    const handleClickOutsideClose = (evt) => {
      if (evt.target.classList.contains("modal")) {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("click", handleClickOutsideClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("click", handleClickOutsideClose);
    };
  }, [activeModal]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
                    onCardLike={handleCardLike}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      handleAddClick={handleAddClick}
                      onCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleLogOutClick={handleLogOutClick}
                      handleProfileEditClick={handleProfileEditClick}
                      onCardLike={handleCardLike}
                      isLoggedIn={isLoggedIn}
                    />
                  </ProtectedRoute>
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
                isLoading={isLoading}
              />
            )}
            <LoginModal
              handleCloseClick={closeActiveModal}
              isOpen={activeModal === "login"}
              handleSignUpClick={handleSignUpClick}
              onLogIn={handleLogIn}
              isLoading={isLoading}
            />
            <RegisterModal
              handleCloseClick={closeActiveModal}
              isOpen={activeModal === "register"}
              handleLogInClick={handleLogInClick}
              onSignUp={handleSignUp}
              isLoading={isLoading}
            />
            <EditProfileModal
              handleCloseClick={closeActiveModal}
              isOpen={activeModal === "profile-edit"}
              onEditSubmit={handleProfileEditSubmit}
              currentUser={currentUser}
              isLoading={isLoading}
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
              isLoading={isLoading}
            />
          </CurrentTemperatureUnitContext.Provider>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}
