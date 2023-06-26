"use strict";
const http_ServerBase = require("./ServerBase.js");
class HttpServer extends http_ServerBase.ServerBase {
  constructor() {
    super();
    this.$$path = {
      indexLists: "/index",
      goodLists: "/good/lists",
      goodDetail: "/good/detail"
    };
  }
  getIndexLists(params, data) {
    return this.getRequest(this.$$path.indexLists, params, data);
  }
  getGoodLists(params, data) {
    return this.getRequest(this.$$path.goodLists, params, data);
  }
  getGoodDetail(params, data) {
    return this.getRequest(this.$$path.goodDetail, params, data);
  }
}
const $HttpServer = new HttpServer();
exports.$HttpServer = $HttpServer;
