export const BASE_URL = "https://api.front-mesto.glepka.nomoredomainsclub.ru/";

export const statusCheck = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err) => {
    err.status = res.status;
    return Promise.reject(err);
  });
};

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(statusCheck);
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(statusCheck);
};

export const checkToken = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  }).then(statusCheck);
};
