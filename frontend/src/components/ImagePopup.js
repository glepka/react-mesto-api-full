import React from "react";

export default function ImagePopup({ card, onClose }) {
  const handlerOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className={`popup popup_overlay_black popup_type_image ${
        Object.keys(card).length && "popup_opened"
      }`}
      onClick={handlerOverlayClick}
    >
      <div className="popup__image-container">
        <button
          className="popup__cross"
          aria-label="Закрыть форму"
          type="button"
          onClick={onClose}
        ></button>
        <img className="popup__image" src={card.link} alt={card.name} />
        <p className="popup__image-text">{card.name}</p>
      </div>
    </div>
  );
}
