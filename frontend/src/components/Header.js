import logo from "../images/logo.svg";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ onSignOut, userEmail }) {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);
  const location = useLocation();

  const handleMenuButtonClick = () => {
    if (isOpenedMenu) {
      setIsOpenedMenu(false);
    } else {
      setIsOpenedMenu(true);
    }
  };
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Логотип" />
      {location.pathname === "/" && (
        <>
          <div
            className={`header__user-info-box ${
              isOpenedMenu ? "header__user-info-box_opened" : ""
            }`}
          >
            <p className="header__text">{userEmail}</p>
            <button onClick={onSignOut} type="button" className="header__link">
              Выйти
            </button>
          </div>
          <button
            type="button"
            className={`burger-menu header__burger-btn ${
              isOpenedMenu ? "burger-menu_opened" : ""
            }`}
            aria-label="Кнопка меню."
            onClick={handleMenuButtonClick}
          >
            <div
              className="burger-menu__cross"
              onClick={handleMenuButtonClick}
            />
          </button>
        </>
      )}
      {location.pathname === "/sign-in" && (
        <Link to="/sign-up" className="header__link header__link_right">
          Регистрация
        </Link>
      )}
      {location.pathname === "/sign-up" && (
        <Link to="/sign-in" className="header__link header__link_right">
          Войти
        </Link>
      )}
    </header>
  );
}
