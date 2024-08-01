import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

const RegisterModal = ({
  handleCloseClick,
  isOpen,
  onSignUp,
  handleLogInClick,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleAvatarChange = (evt) => {
    setAvatar(evt.target.value);
  };

  const handleUserStateReset = () => {
    setAvatar("");
    setEmail("");
    setName("");
    setPassword("");
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onSignUp({ email, password, name, avatar }, handleUserStateReset);
  };

  return (
    <ModalWithForm
      titleText="Sign Up"
      buttonText="Sign Up"
      secondButtonText="or Log In"
      handleCloseClick={handleCloseClick}
      onSubmit={handleFormSubmit}
      handleModalChange={handleLogInClick}
      isOpen={isOpen}
    >
      <label htmlFor="email" className="modal__label">
        Email*
        <input
          type="email"
          className="modal__input"
          id="email"
          placeholder="Email"
          name="Email"
          minLength="2"
          maxLength="30"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password*
        <input
          type="text"
          className="modal__input"
          id="password"
          placeholder="Password"
          name="Password"
          minLength="2"
          maxLength="30"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </label>
      <label htmlFor="name" className="modal__label">
        Name*
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          name="Name"
          minLength="2"
          maxLength="30"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>
      <label htmlFor="avatar" className="modal__label">
        Avatar URL*
        <input
          type="URL"
          className="modal__input"
          id="avatar"
          placeholder="Avatar URL"
          name="avatar"
          value={avatar}
          onChange={handleAvatarChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
