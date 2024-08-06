import "./ModalWithForm.css";

export default function ModalWithForm({
  children,
  buttonText,
  secondButtonText,
  titleText,
  handleCloseClick,
  onSubmit,
  handleModalChange,
  isOpen,
}) {
  return (
    <div className={`modal ${isOpen && "modal__opened"}`}>
      <div className="modal__content">
        <form action="" className="modal__form" onSubmit={onSubmit}>
          <h2 className="modal__title">{titleText}</h2>
          <button
            className="modal__close-button"
            type="button"
            onClick={handleCloseClick}
          />
          {children}
          <div className="modal__submit-buttons">
            <button className="modal__submit-button" type="submit">
              {buttonText}
            </button>
            {secondButtonText ? (
              <button
                className="modal__submit-button modal__submit-button_additional"
                type="button"
                onClick={handleModalChange}
              >
                {secondButtonText}
              </button>
            ) : (
              <></>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
