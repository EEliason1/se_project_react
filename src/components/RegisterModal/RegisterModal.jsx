import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

const RegisterModal = ({
  handleCloseClick,
  isOpen,
  handleSignUpModalSubmit,
  handleLogInClick
}) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  const handleEmailChange = (evt) => {
    setUserEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setUserPassword(evt.target.value);
  };

  const handleNameChange = (evt) => {
    setUserName(evt.target.value);
  }

  const handleAvatarChange = (evt) => {
    setUserAvatar(evt.target.value);
  }

  return (
    <ModalWithForm
      titleText="Sign Up"
      buttonText="Sign Up"
      secondButtonText="or Log In"
      handleCloseClick={handleCloseClick}
      onSubmit={handleSignUpModalSubmit}
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
          value={userEmail}
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
          value={userPassword}
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
          value={userName}
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
          minLength="2"
          maxLength="30"
          value={userAvatar}
          onChange={handleAvatarChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
