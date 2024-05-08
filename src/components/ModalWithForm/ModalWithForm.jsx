import "./ModalWithForm.css";

export default function ModalWithForm({
  children,
  buttonText,
  titleText,
  activeModal,
  handleCloseClick,
}) {
  return (
    <div
      className={`modal ${activeModal === "add-garment" && "modal__opened"}`}
    >
      <div className="modal__content">
        <form action="" className="modal__form">
          <h2 className="modal__title">{titleText}</h2>
          <button
            className="modal__close-button"
            type="button"
            onClick={handleCloseClick}
          ></button>
          {children}
          <button className="modal__submit-button" type="submit" disabled>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
