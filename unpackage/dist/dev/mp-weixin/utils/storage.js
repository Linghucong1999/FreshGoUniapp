"use strict";
const common_vendor = require("../common/vendor.js");
function setStorageSync(name, data) {
  try {
    common_vendor.index.setStorageSync(name, data);
  } catch (e) {
    console.log(e);
  }
}
exports.setStorageSync = setStorageSync;
