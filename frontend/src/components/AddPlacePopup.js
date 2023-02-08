import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlace,
  isLoading,
}) {
  const [cardName, setCardName] = useState("");
  const [cardUrl, setCardUrl] = useState("");

  useEffect(() => {
    setCardName("");
    setCardUrl("");
  }, [isOpen]);

  const handleChangeCardName = (e) => {
    setCardName(e.target.value);
  };

  const handleChangeCardUrl = (e) => {
    setCardUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({
      name: cardName,
      link: cardUrl,
    });
  };

  return (
    <PopupWithForm
      name="place"
      title="Новое место"
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <label className="form__field">
        <input
          id="place-input"
          type="text"
          placeholder="Место"
          className="form__text form__text_type_place"
          name="place"
          required
          minLength="2"
          maxLength="30"
          value={cardName}
          onChange={handleChangeCardName}
        />
        <span className="form__input-error place-input-error"></span>
      </label>
      <label className="form__field">
        <input
          id="link-input"
          type="url"
          placeholder="Ссылка на картинку"
          className="form__text form__text_type_link"
          name="link"
          required
          value={cardUrl}
          onChange={handleChangeCardUrl}
        />
        <span className="form__input-error link-input-error"></span>
      </label>
    </PopupWithForm>
  );
}
