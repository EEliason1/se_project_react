import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

export default function ClothesSection({
  handleAddClick,
  onCardClick,
  clothingItems,
  onCardLike,
  isLoggedIn
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__title">Your Items</p>
        <button
          className="clothes-section__button"
          type="button"
          onClick={handleAddClick}
        >
          + Add Clothes
        </button>
      </div>
      <ul className="clothes-section__card-list">
        {clothingItems.map((item) => {
          let isOwn = item.owner === currentUser._id;
          if (isOwn) {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                isLoggedIn={isLoggedIn}
              />
            );
          }
        })}
      </ul>
    </div>
  );
}
