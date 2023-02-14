import { apiConfig } from "./constants";

class Api {
  constructor({ serverUrl, appJson }) {
    this._serverUrl = serverUrl;
    this._appJson = appJson;
  }

  _getCardsUrl() {
    return `${this._serverUrl}/cards`;
  }

  _getUserInfoUrl() {
    return `${this._serverUrl}/users/me`;
  }

  _getAvatarUrl() {
    return `${this._serverUrl}/users/me/avatar`;
  }

  _getToken() {
    return `Bearer ${localStorage.getItem("jwt")}`;
  }

  _handlerPromise(res) {
    if (res.ok) {
      return res.json();
    }
    const status = res.status;
    return res.json().then((err) => {
      err.status = status;
      return Promise.reject(err);
    });
  }

  getUserInfo() {
    return fetch(this._getUserInfoUrl(), {
      headers: {
        authorization: this._getToken(),
      },
    }).then(this._handlerPromise);
  }

  patchUserInfo(name, about) {
    return fetch(this._getUserInfoUrl(), {
      method: "PATCH",
      headers: {
        authorization: this._getToken(),
        "Content-Type": this._appJson,
      },
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this._handlerPromise);
  }

  patchAvatar(url) {
    return fetch(this._getAvatarUrl(), {
      method: "PATCH",
      headers: {
        authorization: this._getToken(),
        "Content-Type": this._appJson,
      },
      body: JSON.stringify({ avatar: url }),
    }).then(this._handlerPromise);
  }

  getInitialCards() {
    return fetch(this._getCardsUrl(), {
      headers: {
        authorization: this._getToken(),
      },
    }).then(this._handlerPromise);
  }

  postCard(name, link) {
    return fetch(this._getCardsUrl(), {
      method: "POST",
      headers: {
        authorization: this._getToken(),
        "Content-Type": this._appJson,
      },
      body: JSON.stringify({ name, link }),
    }).then(this._handlerPromise);
  }

  delCard(cardId) {
    return fetch(`${this._getCardsUrl()}/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._getToken(),
      },
    }).then(this._handlerPromise);
  }

  putLike(cardId) {
    return fetch(`${this._getCardsUrl()}/${cardId}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._getToken(),
      },
    }).then(this._handlerPromise);
  }

  deleteLike(cardId) {
    return fetch(`${this._getCardsUrl()}/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._getToken(),
      },
    }).then(this._handlerPromise);
  }
}

export const api = new Api(apiConfig);
