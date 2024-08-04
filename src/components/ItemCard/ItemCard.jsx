import "./ItemCard.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function ItemCard({
  item,
  onCardClick,
  onCardLike,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = item.likes.some((_id) => _id === currentUser._id);

  const likeButtonClassName = isLiked
    ? "item__like-button_active"
    : "item__like-button_inactive";

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    onCardLike(item, isLiked);
  };

  return (
    <li className="card" onClick={handleCardClick}>
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        {isLoggedIn ? (
          <button
            className={`item__like-button ${likeButtonClassName}`}
            type="button"
            onClick={handleLike}
          ></button>
        ) : (
          <></>
        )}
      </div>
      <img className="card__image" src={item.imageUrl} alt={item.name} />
    </li>
  );
}
