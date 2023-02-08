import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  isLoading,
}) {
  const inputUrlref = useRef();

  useEffect(() => {
    inputUrlref.current.value = "";
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar(inputUrlref.current.value);
    inputUrlref.current.value = "";
  };

  return (
    <PopupWithForm
      name="new-avatar"
      title="Обновить аватар"
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <label className="form__field">
        <input
          type="url"
          id="user-pic-url-input"
          className="form__text"
          name="input-user-pic-url"
          placeholder="Ссылка на картинку"
          required
          ref={inputUrlref}
        />
        <span className="popup__input-error user-pic-url-input-error"></span>
      </label>
    </PopupWithForm>
  );
}
