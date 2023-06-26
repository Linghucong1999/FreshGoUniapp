"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_index = require("../../utils/index.js");
const goodItem = () => "../../components/goodItem.js";
const _sfc_main = {
  data() {
    return {
      swiperList: [
        "../../static/images/home/banner-1.jpg",
        "../../static/images/home/banner-2.jpg",
        "../../static/images/home/banner-3.jpg"
      ],
      menuList: [{
        id: 1,
        image: "../../static/images/home/menu-lanmei.jpg",
        desc: "\u65B0\u9C9C\u6C34\u679C"
      }, {
        id: 2,
        image: "../../static/images/home/menu-vegetable.jpg",
        desc: "\u852C\u74DC\u83DC\u54C1"
      }, {
        id: 3,
        image: "../../static/images/home/menu-beef.jpg",
        desc: "\u98DE\u79BD\u8D70\u517D"
      }, {
        id: 4,
        image: "../../static/images/home/menu-fish.jpg",
        desc: "\u6D77\u9C9C\u6C34\u4EA7"
      }, {
        id: 5,
        image: "../../static/images/home/menu-juice.jpg",
        desc: "\u9152\u6C34\u996E\u6599"
      }],
      dataList: [],
      countDownTime: ["**", "**", "**", "**"],
      timer: null
    };
  },
  onLoad() {
    this.getIndexLists();
  },
  onUnload() {
    clearInterval(this.timer);
  },
  methods: {
    getIndexLists() {
      common_vendor.index.showLoading({
        title: "\u52A0\u8F7D\u4E2D",
        mask: true
      });
      this.$Http.getIndexLists().then((res) => {
        common_vendor.index.hideLoading();
        if (res.code == 1) {
          this.dataList = res.data;
          this.creatCountDown();
        }
      }).catch((err) => {
        common_vendor.index.hideLoading();
        console.log(err);
      });
    },
    creatCountDown() {
      clearInterval(this.timer);
      let nowTime = new Date().getTime();
      const insterval = 1e3;
      let timearr = [];
      this.timer = setInterval(() => {
        nowTime += insterval;
        timearr = utils_index.countdowmn(nowTime);
        if (timearr !== -1) {
          this.countDownTime = timearr;
        } else {
          clearInterval(timer);
        }
      }, insterval);
    },
    toClassifyPage(id) {
      const categoryId = id;
      common_vendor.index.reLaunch({
        url: `/pages/classify/index?categoryId=${categoryId}`
      });
    },
    toGoodLists(id) {
      common_vendor.index.navigateTo({
        url: "/pages/good/detail?detailId=" + id
      });
    }
  },
  components: {
    goodItem
  }
};
if (!Array) {
  const _component_goodItem = common_vendor.resolveComponent("goodItem");
  _component_goodItem();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.swiperList, (item, index, i0) => {
      return {
        a: item,
        b: index
      };
    }),
    b: common_vendor.f($data.menuList, (item, k0, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.desc),
        c: common_vendor.o(($event) => $options.toClassifyPage(item.id), item.id),
        d: item.id
      };
    }),
    c: common_vendor.t($data.countDownTime[0]),
    d: common_vendor.t($data.countDownTime[1]),
    e: common_vendor.t($data.countDownTime[2]),
    f: common_vendor.t($data.countDownTime[3]),
    g: common_vendor.f($data.dataList.discountList, (item, k0, i0) => {
      return {
        a: item.coverImage,
        b: common_vendor.o(($event) => $options.toGoodLists(item.id), item.id),
        c: common_vendor.t(item.name),
        d: common_vendor.o(($event) => $options.toGoodLists(item.id), item.id),
        e: common_vendor.t(item.discountPrice),
        f: common_vendor.t(item.saledUnit),
        g: common_vendor.t(item.marketPric),
        h: common_vendor.t(item.saledUnit),
        i: common_vendor.o(($event) => $options.toGoodLists(item.id), item.id),
        j: item.id
      };
    }),
    h: common_vendor.f($data.dataList.newComerList, (item, k0, i0) => {
      return {
        a: item.coverImage,
        b: common_vendor.o(($event) => $options.toGoodLists(item.id), item.id),
        c: common_vendor.t(item.name),
        d: common_vendor.o(($event) => $options.toGoodLists(item.id), item.id),
        e: common_vendor.t(item.discountPrice),
        f: common_vendor.t(item.saledUnit),
        g: common_vendor.t(item.marketPric),
        h: common_vendor.t(item.saledUnit),
        i: common_vendor.o(($event) => $options.toGoodLists(item.id), item.id),
        j: item.id
      };
    }),
    i: common_vendor.f($data.dataList.fruitList, (item, k0, i0) => {
      return {
        a: "6a2e9a8e-0-" + i0,
        b: common_vendor.p({
          goodList: item
        }),
        c: item.id
      };
    }),
    j: common_vendor.f($data.dataList.vegetableList, (item, k0, i0) => {
      return {
        a: "6a2e9a8e-1-" + i0,
        b: common_vendor.p({
          goodList: item
        }),
        c: item.id
      };
    }),
    k: common_vendor.f($data.dataList.seafoodList, (item, k0, i0) => {
      return {
        a: "6a2e9a8e-2-" + i0,
        b: common_vendor.p({
          goodList: item
        }),
        c: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/uni-app/\u751F\u9C9Cgo/FreshGo/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
