import { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <main className="page__content">
      <section className="page__section" aria-label="Секция авторизации.">
        <form onSubmit={handleLogin} className="auth-form">
          <fieldset className="auth-form__inputs-box">
            <legend className="auth-form__title">Вход</legend>
            <input
              type="text"
              className="auth-form__input"
              autoComplete="username"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="auth-form__input"
              autoComplete="current-password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <button type="submit" className="auth-form__button">
            Войти
          </button>
        </form>
      </section>
    </main>
  );
}
