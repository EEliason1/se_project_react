import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddItemModal.css";

const AddItemModal = ({ activeModal, closeActiveModal, onAddItem }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleImagechange = (evt) => {
    setImageUrl(evt.target.value);
  };

  const handleWeatherChange = (evt) => {
    setWeather(evt.target.value);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onAddItem({ name, imageUrl, weather });
  };

  return (
    <ModalWithForm
      titleText="New garment"
      buttonText="Add garment"
      activeModal={activeModal}
      handleCloseClick={closeActiveModal}
      onSubmit={handleFormSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          name="name"
          minLength="2"
          maxLength="30"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          name="imageUrl"
          value={imageUrl}
          onChange={handleImagechange}
        />
      </label>
      <fieldset className="modal__radio-buttons" onChange={handleWeatherChange}>
        <legend className="modal__legend" name="weatherData">
          Select the weather type:
        </legend>
        <label htmlFor="hot" className="modal__radio-input">
          <input type="radio" id="hot" name="weatherData" value="hot" />
          Hot
        </label>
        <label htmlFor="warm" className="modal__radio-input">
          <input type="radio" id="warm" name="weatherData" value="warm" />
          Warm
        </label>
        <label htmlFor="cold" className="modal__radio-input">
          <input type="radio" id="cold" name="weatherData" value="cold" />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
