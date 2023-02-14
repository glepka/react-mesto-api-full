import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({ data, onCardClick, onCardLike, onCardDelete }) {
  const user = useContext(CurrentUserContext);
  const isOwn = data.owner === user._id;
  const isLiked = data.likes.some((like) => like === user._id);
  const cardLikeButtonClassName = `${
    isLiked ? "elements__icon elements__icon_type_active" : "elements__icon"
  }`;

  const handleClick = () => {
    onCardClick(data);
  };

  const handleLikeClick = () => {
    onCardLike(data);
  };

  const handleCardDelete = () => {
    onCardDelete(data);
  };

  return (
    <div className="elements__element">
      {isOwn && (
        <button
          className="elements__trash"
          type="button"
          aria-label="Удалить"
          onClick={handleCardDelete}
        ></button>
      )}

      <img
        className="elements__image"
        src={data.link}
        alt={data.name}
        onClick={handleClick}
      />
      <div className="elements__description">
        <h2 className="elements__title">{data.name}</h2>
        <div className="elements__like-container">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <span className="elements__like-counter">{data.likes.length}</span>
        </div>
      </div>
    </div>
  );
}
