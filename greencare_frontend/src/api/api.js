export default class Api {
  //mode: login or register
  static async loginOrRegister(mode, data) {
    if (mode === "login") {
      return await fetch(`http://localhost:3001/users/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
        .then((data) => data.json())
        .catch((err) => console.log(err));
    } else if (mode === "register") {
      return await fetch(`http://localhost:3001/users/register`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
        .then((data) => data.json())
        .catch((err) => console.log(err));
    }
  }

  static async approveEmail(encId) {
    return await fetch(`http://localhost:3001/users/verifyEmail/${encId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((data) => data.json())
      .catch((err) => console.log(err));
  }

  static async getResetPasswordLink(data) {
    return await fetch(`http://localhost:3001/users/sendResetPasswordLink`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((data) => data.json())
      .catch((err) => console.log(err));
  }

  static async resetPassword(data) {
    return await fetch(`http://localhost:3001/users/resetPassword`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((data) => data.json())
      .catch((err) => console.log(err));
  }
}
