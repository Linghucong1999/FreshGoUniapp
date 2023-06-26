"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {},
  onLoad() {
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "shop-filled",
      size: "30"
    }),
    b: common_vendor.p({
      type: "location",
      size: "30"
    }),
    c: common_vendor.p({
      type: "home",
      size: "30"
    }),
    d: common_vendor.p({
      type: "shop",
      size: "40",
      color: "#2D9A3A"
    }),
    e: common_vendor.p({
      type: "wallet",
      size: "40",
      color: "#2D9A3A"
    }),
    f: common_vendor.p({
      type: "heart",
      size: "40",
      color: "#2D9A3A"
    }),
    g: common_vendor.p({
      type: "home",
      size: "40",
      color: "#2D9A3A"
    }),
    h: common_vendor.p({
      type: "gift",
      size: "40",
      color: "#2D9A3A"
    }),
    i: common_vendor.p({
      type: "phone",
      size: "40",
      color: "#2D9A3A"
    }),
    j: common_vendor.p({
      type: "cart",
      size: "40",
      color: "#2D9A3A"
    }),
    k: common_vendor.p({
      type: "help",
      size: "40",
      color: "#2D9A3A"
    }),
    l: common_vendor.p({
      type: "staff",
      size: "40",
      color: "#2D9A3A"
    }),
    m: common_vendor.p({
      type: "vip",
      size: "40",
      color: "#2D9A3A"
    }),
    n: common_vendor.p({
      type: "chatboxes",
      size: "40",
      color: "#2D9A3A"
    }),
    o: common_vendor.p({
      type: "chatbubble",
      size: "40",
      color: "#2D9A3A"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/uni-app/\u751F\u9C9Cgo/FreshGo/pages/mine/index.vue"]]);
wx.createPage(MiniProgramPage);
