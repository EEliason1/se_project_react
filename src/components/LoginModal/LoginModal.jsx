import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

const LoginModal = ({
  handleCloseClick,
  isOpen,
  handleLogInModalSubmit,
  handleSignUpClick,
}) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleEmailChange = (evt) => {
    setUserEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setUserPassword(evt.target.value);
  };

  return (
    <ModalWithForm
      titleText="Log In"
      buttonText="Log In"
      secondButtonText="or Sign Up"
      handleCloseClick={handleCloseClick}
      onSubmit={handleLogInModalSubmit}
      handleModalChange={handleSignUpClick}
      isOpen={isOpen}
    >
      <label htmlFor="email" className="modal__label">
        Email
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
        Password
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
    </ModalWithForm>
  );
};

export default LoginModal;
