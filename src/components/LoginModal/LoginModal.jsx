import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

const LoginModal = ({
  handleCloseClick,
  isOpen,
  onLogIn,
  handleSignUpClick,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleUserStateReset = () => {
    setEmail("");
    setPassword("");
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onLogIn({ email, password }, handleUserStateReset);
  };

  return (
    <ModalWithForm
      titleText="Log In"
      buttonText="Log In"
      secondButtonText="or Sign Up"
      handleCloseClick={handleCloseClick}
      onSubmit={handleFormSubmit}
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
          value={email}
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
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
