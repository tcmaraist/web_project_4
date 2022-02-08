export default class Api {
  constructor(options) {}

  getInitialCards() {
    return fetch("", {
      headers: {
        authorization: "",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
}

const api = new Api({});
