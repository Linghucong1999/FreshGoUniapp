"use strict";
const http_Flyconfig = require("./Flyconfig.js");
class ServerBase {
  constructor() {
  }
  getRequest(url = "", params = "", data = null) {
    return http_Flyconfig.fly.request(`${url}/${params}`, data, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    });
  }
  postRequest(url = "", params = null, data = "") {
    return http_Flyconfig.fly.request(`${url}`, params, {
      method: "POST"
    });
  }
}
exports.ServerBase = ServerBase;
