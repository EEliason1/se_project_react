import "./ItemModal.css";

export default function ItemModal({
  activeModal,
  handleCloseClick,
  selectedCard,
}) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"}`}>
      <div className="modal__content modal__content_type_preview">
        <button
          className="modal__close-button"
          type="button"
          onClick={handleCloseClick}
        ></button>
        <img
          src={selectedCard.link}
          alt={selectedCard.name}
          className="modal__image"
        />
        <div className="modal__card-info">
          <h2 className="modal__caption">{selectedCard.name}</h2>
          <p className="modal__weather">Weather: {selectedCard.weather}</p>
        </div>
      </div>
    </div>
  );
}
