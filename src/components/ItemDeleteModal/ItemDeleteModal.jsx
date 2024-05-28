import "./ItemDeleteModal.css";

export default function ItemDeleteModal({
  activeModal,
  handleCloseClick,
  handleDeteleClick,
  clothingItem,
}) {
  const handleItemDelete = (evt) => {
    evt.preventDefault();
    handleDeteleClick(clothingItem);
  };

  return (
    <div
      className={`modal ${activeModal === "delete-item" && "modal__opened"}`}
    >
      <div className="modal__content modal__content_type_delete">
        <button
          className="modal__close-button"
          type="button"
          onClick={handleCloseClick}
        ></button>
        <p className="modal__confirmation-text">
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </p>
        <button
          className="modal__confirm-delete"
          type="button"
          onClick={handleItemDelete}
        >
          Yes, delete item
        </button>
        <button
          className="modal__cancel-delete"
          type="button"
          onClick={handleCloseClick}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
