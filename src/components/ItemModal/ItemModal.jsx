import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import "./ItemModal.css";

export default function ItemModal({
  activeModal,
  handleCloseClick,
  selectedCard,
  onOpenConfirm,
}) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser._id;
  const itemDeleteButtonClassName = `modal__card-delete-button ${
    isOwn
      ? "modal__card-delete-button_visible"
      : "modal__card-delete-button_hidden"
  }`;

  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"}`}>
      <div className="modal__content modal__content_type_preview">
        <button
          className="modal__close-button"
          type="button"
          onClick={handleCloseClick}
        ></button>
        <img
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
          className="modal__image"
        />
        <div className="modal__footer">
          <div className="modal__card-info">
            <h2 className="modal__caption">{selectedCard.name}</h2>
            <p className="modal__weather">Weather: {selectedCard.weather}</p>
          </div>
          <button
            className={itemDeleteButtonClassName}
            type="button"
            onClick={onOpenConfirm}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}
