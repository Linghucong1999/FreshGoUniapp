"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "goodItem",
  props: {
    goodList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {
    toGoodList(id) {
      common_vendor.index.navigateTo({
        url: "/pages/good/detail?detaiId=" + id
      });
    },
    addShopCart() {
      try {
        let value = common_vendor.index.getStorageSync("shopCart") || [];
        let index = value.findIndex((valueid) => {
          return valueid.id == this.goodList.id;
        });
        if (index !== -1) {
          value[index].buyNum++;
        } else {
          this.goodList.buyNum = 1;
          value.push(this.goodList);
        }
        try {
          common_vendor.index.setStorageSync("shopCart", value);
          common_vendor.index.showToast({
            title: "\u5DF2\u6DFB\u52A0\u8FDB\u8D2D\u7269\u8F66",
            icon: "success",
            duration: 1e3
          });
        } catch (e) {
          common_vendor.index.showToast({
            title: "\u52A0\u5165\u8D2D\u7269\u8F66\u5931\u8D25,\u8054\u7CFB\u5F00\u53D1\u4EBA\u5458",
            icon: "error",
            duration: 1500
          });
        }
      } catch (e) {
        common_vendor.index.showToast({
          title: "\u8D2D\u7269\u8F66\u51FA\u9519,\u8054\u7CFB\u5F00\u53D1\u4EBA\u5458",
          icon: "error",
          duration: 1500
        });
      }
    }
  },
  onLoad() {
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.goodList.coverImage,
    b: common_vendor.o(($event) => $options.toGoodList($props.goodList.id)),
    c: common_vendor.t($props.goodList.name),
    d: common_vendor.t($props.goodList.discountPrice),
    e: common_vendor.t($props.goodList.saledUnit),
    f: common_vendor.t($props.goodList.marketPric),
    g: common_vendor.t($props.goodList.saledUnit),
    h: common_vendor.o(($event) => $options.addShopCart())
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/uni-app/\u751F\u9C9Cgo/FreshGo/components/goodItem.vue"]]);
wx.createComponent(Component);
