"use strict";
const common_vendor = require("../common/vendor.js");
const router_config = require("./config.js");
const router = common_vendor.createRouter({
  history: common_vendor.createWebHashHistory(),
  routes: router_config.routes
});
router.beforeEach((to, from, next) => {
  next();
});
exports.router = router;
