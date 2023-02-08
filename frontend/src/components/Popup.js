import { useCallback, useEffect } from "react";

export default function Popup({ isOpen, onClose, children }) {
  const handlerOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePressEsc = useCallback((e) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keyup", handlePressEsc);
    } else {
      document.removeEventListener("keyup", handlePressEsc);
    }
  }, [isOpen]);

  return (
    <div
      className={`popup ${isOpen ? " popup_opened" : ""}`}
      onMouseDown={handlerOverlayClick}
    >
      {children}
    </div>
  );
}
