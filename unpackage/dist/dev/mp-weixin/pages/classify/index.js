"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      barList: [
        {
          id: 1,
          name: "\u65B0\u9C9C\u6C34\u679C"
        },
        {
          id: 2,
          name: "\u852C\u74DC\u83DC\u54C1"
        },
        {
          id: 3,
          name: "\u98DE\u79BD\u8D70\u517D"
        },
        {
          id: 4,
          name: "\u6D77\u9C9C\u6C34\u4EA7"
        },
        {
          id: 5,
          name: "\u9152\u6C34\u996E\u6599"
        }
      ],
      currentTab: 1,
      dataList: []
    };
  },
  onShow() {
  },
  onLoad(option) {
    const id = option.categoryId || this.currentTab;
    this.currentTab = id;
    this.getGoodList(id);
  },
  methods: {
    getGoodList(id) {
      common_vendor.index.showLoading({
        title: "\u52A0\u8F7D\u4E2D",
        mask: true
      });
      this.$Http.getGoodLists("", {
        page: 1,
        limit: 20,
        discountPrice: "asc",
        category: id
      }).then((res) => {
        common_vendor.index.hideLoading();
        if (res.code == 1) {
          this.dataList = res.data;
        } else {
          common_vendor.index.showLoading({
            title: "\u63D0\u793A",
            content: "\u7F51\u7EDC\u51FA\u9519\u4E86",
            showCancel: false
          });
        }
      }).catch((err) => {
        common_vendor.index.hideLoading();
      });
    },
    changeDetail(id) {
      this.currentTab = id;
      this.getGoodList(id);
    },
    toGooddetail(id) {
      common_vendor.index.navigateTo({
        url: "/pages/good/detail?detailId=" + id
      });
    },
    addShopCart(item) {
      try {
        let value = common_vendor.index.getStorageSync("shopCart") || [];
        let index = value.findIndex((value2, index2) => {
          return value2.id === item.id;
        });
        if (index !== -1) {
          value[index].buyNum++;
        } else {
          item.buyNum = 1;
          value.push(item);
        }
        try {
          common_vendor.index.setStorageSync("shopCart", value);
          common_vendor.index.showToast({
            title: "\u5DF2\u6DFB\u52A0\u8FDB\u5165\u8D2D\u7269\u8F66",
            icon: "success",
            duration: 1e3
          });
        } catch (e) {
          common_vendor.index.showToast({
            title: "\u52A0\u5165\u8D2D\u7269\u8F66\u5931\u8D25,\u8BF7\u8054\u7CFB\u5F00\u53D1\u4EBA\u5458",
            icon: "error",
            duration: 1e3
          });
        }
      } catch (e) {
        common_vendor.index.showToast({
          title: "\u6570\u636E\u672A\u5B8C\u6210\u6E32\u67D3,\u8BF7\u8054\u7CFB\u5F00\u53D1\u4EBA\u5458",
          icon: "error",
          duration: 1e3
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.barList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.n($data.currentTab == item.id ? "activeTab" : ""),
        c: common_vendor.o(($event) => $options.changeDetail(item.id), item.id),
        d: item.id
      };
    }),
    b: common_vendor.f($data.dataList, (item, index, i0) => {
      return {
        a: item.coverImage,
        b: common_vendor.o(($event) => $options.toGooddetail(item.id), item.id),
        c: common_vendor.t(item.name),
        d: common_vendor.o(($event) => $options.toGooddetail(item.id), item.id),
        e: common_vendor.t(item.saleNum),
        f: common_vendor.t(item.saledUnit),
        g: common_vendor.t(item.discountPrice),
        h: common_vendor.t(item.saledUnit),
        i: common_vendor.t(item.marketPric),
        j: common_vendor.t(item.saledUnit),
        k: common_vendor.o(($event) => $options.addShopCart(item), item.id),
        l: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/uni-app/\u751F\u9C9Cgo/FreshGo/pages/classify/index.vue"]]);
wx.createPage(MiniProgramPage);
