import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";

export default function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <div className="App">
      <div className="App__content">
        <Header handleAddClick={handleAddClick} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
      </div>
      <ModalWithForm
        titleText="New garment"
        buttonText="Add garment"
        activeModal={activeModal}
        handleCloseClick={closeActiveModal}
      >
        <label htmlFor="name" className="modal__label">
          Name
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image
          <input
            type="url"
            className="modal__input"
            id="imageUrl"
            placeholder="Image URL"
          />
        </label>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend" name="weatherData">
            Select the weather type:
          </legend>
          <label htmlFor="hot" className="modal__radio-input">
            <input type="radio" id="hot" name="weatherData" />
            Hot
          </label>
          <label htmlFor="weatherType" className="modal__radio-input">
            <input type="radio" id="warm" name="weatherData" />
            Warm
          </label>
          <label htmlFor="weatherType" className="modal__radio-input">
            <input type="radio" id="cold" name="weatherData" />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        selectedCard={selectedCard}
        handleCloseClick={closeActiveModal}
      />
    </div>
  );
}
