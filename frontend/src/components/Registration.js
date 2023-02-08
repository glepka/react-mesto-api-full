import { Link } from "react-router-dom";
import { useState } from "react";

export default function Registration({ onRegistration }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    onRegistration(email, password);
  };
  return (
    <main className="page__content">
      <section className="page__section" aria-label="Секция регистрации.">
        <form onSubmit={handleRegistration} className="auth-form">
          <fieldset className="auth-form__inputs-box">
            <legend className="auth-form__title">Регистрация</legend>
            <input
              type="email"
              className="auth-form__input"
              autoComplete="username"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="auth-form__input"
              autoComplete="new-password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </fieldset>
          <button type="submit" className="auth-form__button">
            Зарегистрироваться
          </button>
          <div className="auth-form__login-link-box">
            <p className="auth-form__tip-text">Уже зарегистрированы?</p>
            <Link className="auth-form__link" to="/sign-in">
              Войти
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}
