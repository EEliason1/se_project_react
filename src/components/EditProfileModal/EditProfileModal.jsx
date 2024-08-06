import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./EditProfileModal.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const EditProfileModal = ({
  handleCloseClick,
  isOpen,
  onEditSubmit,
  isLoading,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [avatar, setAvatar] = useState(currentUser.avatar);

  useEffect(() => {
    setName(currentUser.name);
    setAvatar(currentUser.avatar);
  }, [isOpen]);

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleAvatarChange = (evt) => {
    setAvatar(evt.target.value);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onEditSubmit({ name, avatar });
  };

  return (
    <ModalWithForm
      titleText="Change profile data"
      buttonText={isLoading ? "Saving..." : "Save changes"}
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
          placeholder={currentUser.name}
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
          placeholder={currentUser.avatar}
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
