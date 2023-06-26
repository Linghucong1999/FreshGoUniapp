"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const common_vendor = require("./common/vendor.js");
const http_HttpServer = require("./http/HttpServer.js");
const router_index = require("./router/index.js");
require("./http/ServerBase.js");
require("./http/Flyconfig.js");
require("./http/Pathconfig.js");
require("./router/config.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/classify/index.js";
  "./pages/shopCart/index.js";
  "./pages/mine/index.js";
  "./pages/mine/login.js";
  "./pages/mine/register.js";
  "./pages/good/detail.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/uni-app/\u751F\u9C9Cgo/FreshGo/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.config.globalProperties.$Http = http_HttpServer.$HttpServer;
  app.config.globalProperties.router = router_index.router;
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
