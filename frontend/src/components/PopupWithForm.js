import Popup from "./Popup";

export default function PopupWithForm({
  name,
  title,
  children,
  buttonText,
  onSubmit,
  isLoading,
  onClose,
  isOpen,
}) {
  return (
    <Popup onClose={onClose} isOpen={isOpen}>
      <div className="popup__container">
        <button
          className="popup__cross"
          type="button"
          aria-label="Закрыть форму."
          onClick={onClose}
        ></button>
        <h3 className="popup__title">{title}</h3>
        <form
          className="form"
          name={name}
          autoComplete="off"
          noValidate
          onSubmit={onSubmit}
        >
          {children}
          <button
            className="form__submit-btn"
            type="submit"
            disabled={isLoading}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </Popup>
  );
}
