import PopupWithForm from "./PopupWithForm";

export default function CardDeletePopup({
  onClose,
  onCardDelete,
  isLoading,
  deletingCard,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onCardDelete(deletingCard);
  };

  return (
    <PopupWithForm
      title="Вы уверены?"
      buttonText={isLoading ? "Удаление..." : "Да"}
      isOpen={Object.keys(deletingCard).length}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    />
  );
}
