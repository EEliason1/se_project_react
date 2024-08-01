import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./EditProfileModal.css";

const EditProfileModal = ({
  handleCloseClick,
  isOpen,
  onEditSubmit,
}) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleAvatarChange = (evt) => {
    setAvatar(evt.target.value);
  };

  const handleUserStateReset = () => {
    setName("");
    setAvatar("");
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onEditSubmit({ name, avatar }, handleUserStateReset);
  };

  return (
    <ModalWithForm
      titleText="Change profile data"
      buttonText="Save changes"
      handleCloseClick={handleCloseClick}
      onSubmit={handleFormSubmit}
      isOpen={isOpen}
    >
      <label htmlFor="name" className="modal__label">
        Name*
        <input
          type="name"
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
        Avatar
        <input
          type="text"
          className="modal__input"
          id="avatar"
          placeholder="Avatar"
          name="Avatar"
          value={avatar}
          onChange={handleAvatarChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
