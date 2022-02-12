export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  getUserInfo() {
    fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this.handleServerResponse);
  }

  setUserInfo({ name, description }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        description,
      }),
    }).then(this._handleServerResponse);
  }

  updateProfilePicture({ avatar }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then(this._handleServerResponse);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._handleServerResponse);
  }

  addCard({ title, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        title,
        link,
      }),
    }).then(this._handleServerResponse);
  }

  removeCard({ _id }) {
    return fetch(`${this._baseUrl}/cards/cardId`, {
      method: "DELETE",
      headers: this._headers,
      body: JSON.stringify({
        _id,
      }),
    }).then(this._handleServerResponse);
  }

  toggleLikeCardStatus(cardId, like) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: like ? "PUT" : "DELETE",
      headers: this._headers,
    }).then(this._handleServerResponse);
  }
}
