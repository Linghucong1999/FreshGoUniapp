"use strict";
const common_vendor = require("../common/vendor.js");
const http_Pathconfig = require("./Pathconfig.js");
const fly = new common_vendor.Fly();
fly.config.timeout = 2e4;
fly.config.baseURL = http_Pathconfig.path.basePath;
fly.interceptors.request.use((config, promise) => {
  return config;
});
fly.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    common_vendor.index.showModal({
      title: "\u63D0\u793A",
      content: `${err.message}`,
      showCancel: false
    });
  }
);
exports.fly = fly;
