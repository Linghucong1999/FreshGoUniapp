"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_storage = require("../../utils/storage.js");
const _sfc_main = {
  data() {
    return {
      shopCart: [],
      deleteActived: false,
      totalPrice: 0,
      redioChecked: null,
      isActive: false
    };
  },
  onShow() {
    this.shopCart = common_vendor.index.getStorageSync("shopCart") || [];
    this.shopCart.map((item, index) => {
      return item.checked = false;
    });
    this.totalPrice = new Number(0).toFixed(2);
    this.redioChecked = false;
  },
  onLoad() {
  },
  methods: {
    getCheckbox(index) {
      this.shopCart[index].checked = !this.shopCart[index].checked;
      let checkNum = this.shopCart.filter((item) => item.checked === true).length;
      if (checkNum === this.shopCart.length) {
        this.redioChecked = true;
      } else {
        this.redioChecked = false;
      }
      this.countPrice();
    },
    handClickActive() {
      this.isActive = !this.isActive;
    },
    deleteGood() {
      let that = this;
      common_vendor.index.showModal({
        title: "\u63D0\u793A",
        content: "\u786E\u5B9A\u8981\u5220\u9664\u5417?",
        success: (res) => {
          if (res.confirm) {
            that.shopCart = that.shopCart.filter((item, index) => {
              return item.checked !== true;
            });
            utils_storage.setStorageSync("shopCart", that.shopCart);
            that.totalPrice = new Number(0).toFixed(2);
            that.radioChange();
          }
        }
      });
    },
    isDetele() {
      this.deleteActived = this.shopCart.some((item) => {
        return item.checked === true;
      });
    },
    countPrice() {
      let initPrice = 0;
      this.totalPrice = this.shopCart.reduce((total, value, index) => {
        let tempPrice = value.checked ? value.discountPrice * value.buyNum : 0;
        return total + tempPrice;
      }, initPrice).toFixed(2);
    },
    addNum(index) {
      this.shopCart[index].buyNum++;
      this.countPrice();
      utils_storage.setStorageSync("shopCart", this.shopCart);
    },
    subNum(index) {
      if (this.shopCart[index].buyNum > 1) {
        this.shopCart[index].buyNum--;
        this.countPrice();
        utils_storage.setStorageSync("shopCart", this.shopCart);
      }
    },
    radioChange() {
      if (this.redioChecked) {
        this.shopCart.map((item, index) => {
          return item.checked = false;
        });
      } else {
        this.shopCart.map((item, index) => {
          return item.checked = true;
        });
      }
      this.redioChecked = !this.redioChecked;
      this.countPrice();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.shopCart.length === 0
  }, $data.shopCart.length === 0 ? {} : common_vendor.e({
    b: $data.isActive ? 1 : "",
    c: common_vendor.o(($event) => $options.handClickActive()),
    d: common_vendor.f($data.shopCart, (item, index, i0) => {
      return {
        a: item.id.toString(),
        b: item.checked,
        c: common_vendor.o(($event) => $options.getCheckbox(index), item.id),
        d: item.coverImage,
        e: common_vendor.t(item.name),
        f: common_vendor.t(item.discountPrice),
        g: common_vendor.o(($event) => $options.subNum(index), item.id),
        h: common_vendor.t(item.buyNum),
        i: common_vendor.o(($event) => $options.addNum(index), item.id),
        j: item.id
      };
    }),
    e: $data.isActive === false
  }, $data.isActive === false ? {
    f: $data.redioChecked,
    g: common_vendor.o(($event) => $options.radioChange()),
    h: common_vendor.t($data.totalPrice)
  } : {
    i: $data.redioChecked,
    j: common_vendor.o(($event) => $options.radioChange()),
    k: common_vendor.o((...args) => $options.deleteGood && $options.deleteGood(...args))
  }));
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/uni-app/\u751F\u9C9Cgo/FreshGo/pages/shopCart/index.vue"]]);
wx.createPage(MiniProgramPage);
