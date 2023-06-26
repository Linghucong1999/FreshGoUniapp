if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  function countdowmn(time) {
    const endTime = new Date("2023-06-01 12:00:00");
    const endDiff = parseInt((endTime.getTime() - time) / 1e3);
    if (endDiff < 0) {
      return -1;
    } else {
      const day = timeFullZero(parseInt(endDiff / 3600 / 24));
      const hour = timeFullZero(parseInt(endDiff / 3600 % 24));
      const minute = timeFullZero(parseInt(endDiff / 60 % 60));
      const second = timeFullZero(parseInt(endDiff % 60));
      return [day, hour, minute, second];
    }
  }
  function timeFullZero(num) {
    return num >= 10 ? `${num}` : `0${num}`;
  }
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$9 = {
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
      },
      addShopCart() {
        try {
          let value = uni.getStorageSync("shopCart") || [];
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
            uni.setStorageSync("shopCart", value);
            uni.showToast({
              title: "\u5DF2\u6DFB\u52A0\u8FDB\u8D2D\u7269\u8F66",
              icon: "success",
              duration: 1e3
            });
          } catch (e) {
            uni.showToast({
              title: "\u52A0\u5165\u8D2D\u7269\u8F66\u5931\u8D25,\u8054\u7CFB\u5F00\u53D1\u4EBA\u5458",
              icon: "error",
              duration: 1500
            });
          }
        } catch (e) {
          uni.showToast({
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
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "good-item" }, [
      vue.createElementVNode("image", {
        class: "item-image",
        src: $props.goodList.coverImage,
        onClick: _cache[0] || (_cache[0] = ($event) => $options.toGoodList($props.goodList.id))
      }, null, 8, ["src"]),
      vue.createElementVNode("view", { class: "item-name" }, vue.toDisplayString($props.goodList.name), 1),
      vue.createElementVNode("view", { class: "item-under" }, [
        vue.createElementVNode("text", { class: "item-discount-price" }, vue.toDisplayString($props.goodList.discountPrice) + "\u5143/" + vue.toDisplayString($props.goodList.saledUnit), 1),
        vue.createElementVNode("text", { class: "item-market-price" }, vue.toDisplayString($props.goodList.marketPric) + "\u5143/" + vue.toDisplayString($props.goodList.saledUnit), 1),
        vue.createElementVNode("button", {
          class: "item-buy",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.addShopCart())
        })
      ])
    ]);
  }
  const goodItem = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-69218796"], ["__file", "E:/uni-app/\u751F\u9C9Cgo/FreshGo/components/goodItem.vue"]]);
  const _sfc_main$8 = {
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
        uni.showLoading({
          title: "\u52A0\u8F7D\u4E2D",
          mask: true
        });
        this.$Http.getIndexLists().then((res) => {
          uni.hideLoading();
          if (res.code == 1) {
            this.dataList = res.data;
            this.creatCountDown();
          }
        }).catch((err) => {
          uni.hideLoading();
          formatAppLog("log", "at pages/index/index.vue:197", err);
        });
      },
      creatCountDown() {
        clearInterval(this.timer);
        let nowTime = new Date().getTime();
        const insterval = 1e3;
        let timearr = [];
        this.timer = setInterval(() => {
          nowTime += insterval;
          timearr = countdowmn(nowTime);
          if (timearr !== -1) {
            this.countDownTime = timearr;
          } else {
            clearInterval(timer);
          }
        }, insterval);
      },
      toClassifyPage(id) {
      },
      toGoodLists(id) {
      }
    },
    components: {
      goodItem
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_goodItem = vue.resolveComponent("goodItem");
    return vue.openBlock(), vue.createElementBlock("view", { class: "page-index" }, [
      vue.createCommentVNode(" \u9876\u90E8\u8F6E\u64AD "),
      vue.createElementVNode("view", { class: "swiper-center" }, [
        vue.createElementVNode("swiper", {
          class: "swiper",
          autoplay: "true",
          interval: "2000",
          circular: "true",
          "indicator-dots": "true"
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.swiperList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("swiper-item", {
              key: index,
              class: "swiper-item"
            }, [
              vue.createElementVNode("image", { src: item }, null, 8, ["src"])
            ]);
          }), 128))
        ])
      ]),
      vue.createCommentVNode(" \u83DC\u5355\u680F "),
      vue.createElementVNode("view", { class: "menu" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.menuList, (item) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: item.id,
            class: "menu-item",
            onClick: ($event) => $options.toClassifyPage(item.id)
          }, [
            vue.createElementVNode("image", {
              src: item.image,
              class: "menu-item-image"
            }, null, 8, ["src"]),
            vue.createElementVNode("text", { class: "menu-item-text" }, vue.toDisplayString(item.desc), 1)
          ], 8, ["onClick"]);
        }), 128))
      ]),
      vue.createCommentVNode(" \u9650\u65F6\u79D2\u6740 "),
      vue.createElementVNode("view", { class: "limit-time" }, [
        vue.createElementVNode("view", { class: "limit-time-top" }, [
          vue.createElementVNode("text", { class: "limit-time-title" }, "\u9650\u65F6\u4F18\u60E0"),
          vue.createElementVNode("text", { class: "limit-time-end" }, [
            vue.createTextVNode("\u8DDD\u7ED3\u675F: "),
            vue.createElementVNode("text", { class: "time-block" }, vue.toDisplayString($data.countDownTime[0]), 1),
            vue.createElementVNode("text", { class: "time-sign" }, ":"),
            vue.createElementVNode("text", { class: "time-block" }, vue.toDisplayString($data.countDownTime[1]), 1),
            vue.createElementVNode("text", { class: "time-sign" }, ":"),
            vue.createElementVNode("text", { class: "time-block" }, vue.toDisplayString($data.countDownTime[2]), 1),
            vue.createElementVNode("text", { class: "time-sign" }, ":"),
            vue.createElementVNode("text", { class: "time-block" }, vue.toDisplayString($data.countDownTime[3]), 1)
          ]),
          vue.createElementVNode("button", { class: "more" }, [
            vue.createElementVNode("text", { class: "more-sign" }, [
              vue.createElementVNode("text", { class: "icon arrow" })
            ]),
            vue.createElementVNode("text", { class: "button-text" }, "\u66F4\u591A")
          ])
        ]),
        vue.createElementVNode("scroll-view", { "scroll-x": "true" }, [
          vue.createElementVNode("view", { class: "seckill-list" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.dataList.discountList, (item) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: item.id,
                class: "seckill-item"
              }, [
                vue.createElementVNode("image", {
                  src: item.coverImage,
                  onClick: ($event) => $options.toGoodLists(item.id),
                  class: "seckill-image"
                }, null, 8, ["src", "onClick"]),
                vue.createElementVNode("image", {
                  src: "/static/images/home/xianshimiaosha.png",
                  class: "seckill-icon"
                }),
                vue.createElementVNode("text", {
                  class: "seckill-shop-name",
                  onClick: ($event) => $options.toGoodLists(item.id)
                }, vue.toDisplayString(item.name), 9, ["onClick"]),
                vue.createElementVNode("view", {
                  class: "seckill-price",
                  onClick: ($event) => $options.toGoodLists(item.id)
                }, [
                  vue.createElementVNode("text", { class: "seckill-discount-price" }, vue.toDisplayString(item.discountPrice) + "\u5143/" + vue.toDisplayString(item.saledUnit), 1),
                  vue.createElementVNode("text", { class: "seckill-market-price" }, vue.toDisplayString(item.marketPric) + "\u5143/" + vue.toDisplayString(item.saledUnit), 1)
                ], 8, ["onClick"])
              ]);
            }), 128))
          ])
        ])
      ]),
      vue.createCommentVNode(" \u65B0\u4EBA\u4F18\u4EAB "),
      vue.createElementVNode("view", { class: "new-comer" }, [
        vue.createElementVNode("view", { class: "new-comer-top" }, [
          vue.createElementVNode("view", { class: "new-comer-text" }, [
            vue.createElementVNode("text", { class: "new-comer-title" }, "\u65B0\u4EBA\u4F18\u4EAB"),
            vue.createElementVNode("text", { class: "new-comer-desc" }, "\u65B0\u4EBA\u4F18\u60E0\u4EAB\u4E0D\u505C")
          ]),
          vue.createElementVNode("button", { class: "more" }, [
            vue.createElementVNode("text", { class: "more-sign" }, [
              vue.createElementVNode("text", { class: "icon arrow" })
            ]),
            vue.createElementVNode("text", { class: "button-text" }, "\u66F4\u591A")
          ])
        ])
      ]),
      vue.createElementVNode("scroll-view", { "scroll-x": "true" }, [
        vue.createElementVNode("view", { class: "seckill-list" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.dataList.newComerList, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: item.id,
              class: "seckill-item"
            }, [
              vue.createElementVNode("image", {
                src: item.coverImage,
                class: "seckill-image",
                onClick: ($event) => $options.toGoodLists(item.id)
              }, null, 8, ["src", "onClick"]),
              vue.createElementVNode("image", {
                src: "/static/images/home/xinren.png",
                class: "comer-icon"
              }),
              vue.createElementVNode("text", {
                class: "seckill-shop-name",
                onClick: ($event) => $options.toGoodLists(item.id)
              }, vue.toDisplayString(item.name), 9, ["onClick"]),
              vue.createElementVNode("view", {
                class: "seckill-price",
                onClick: ($event) => $options.toGoodLists(item.id)
              }, [
                vue.createElementVNode("text", { class: "seckill-discount-price" }, vue.toDisplayString(item.discountPrice) + "\u5143/" + vue.toDisplayString(item.saledUnit), 1),
                vue.createElementVNode("text", { class: "seckill-market-price" }, vue.toDisplayString(item.marketPric) + "\u5143/" + vue.toDisplayString(item.saledUnit), 1)
              ], 8, ["onClick"])
            ]);
          }), 128))
        ])
      ]),
      vue.createCommentVNode(" \u6C34\u679C\u533A\u57DF "),
      vue.createElementVNode("view", { class: "section" }, [
        vue.createElementVNode("image", {
          src: "/static/images/home/fruit-sale.jpg",
          class: "section-sale-image"
        }),
        vue.createElementVNode("view", { class: "section-list" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.dataList.fruitList, (item) => {
            return vue.openBlock(), vue.createBlock(_component_goodItem, {
              key: item.id,
              goodList: item,
              class: "good-item"
            }, null, 8, ["goodList"]);
          }), 128))
        ])
      ]),
      vue.createCommentVNode(" \u852C\u83DC\u4E13\u533A "),
      vue.createElementVNode("view", { class: "section" }, [
        vue.createElementVNode("image", {
          src: "/static/images/home/fruit2.jpg",
          class: "section-sale-image",
          style: { "height": "300rpx" }
        }),
        vue.createElementVNode("view", { class: "section-list" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.dataList.vegetableList, (item) => {
            return vue.openBlock(), vue.createBlock(_component_goodItem, {
              key: item.id,
              goodList: item,
              class: "good-item"
            }, null, 8, ["goodList"]);
          }), 128))
        ])
      ]),
      vue.createCommentVNode(" \u6D77\u9C9C\u4E13\u533A "),
      vue.createElementVNode("view", { class: "section" }, [
        vue.createElementVNode("image", {
          src: "/static/images/home/seafood-sale2.jpg",
          class: "section-sale-image",
          style: { "height": "300rpx" }
        }),
        vue.createElementVNode("view", { class: "section-list" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.dataList.seafoodList, (item) => {
            return vue.openBlock(), vue.createBlock(_component_goodItem, {
              key: item.id,
              goodList: item,
              class: "good-item"
            }, null, 8, ["goodList"]);
          }), 128))
        ])
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "E:/uni-app/\u751F\u9C9Cgo/FreshGo/pages/index/index.vue"]]);
  const _sfc_main$7 = {
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
    },
    methods: {
      getGoodList(id) {
        uni.showLoading({
          title: "\u52A0\u8F7D\u4E2D",
          mask: true
        });
        this.$Http.getGoodLists("", {
          page: 1,
          limit: 20,
          discountPrice: "asc",
          category: id
        }).then((res) => {
          uni.hideLoading();
          if (res.code == 1) {
            this.dataList = res.data;
          } else {
            uni.showLoading({
              title: "\u63D0\u793A",
              content: "\u7F51\u7EDC\u51FA\u9519\u4E86",
              showCancel: false
            });
          }
        }).catch((err) => {
          uni.hideLoading();
        });
      },
      changeDetail(id) {
        this.currentTab = id;
        this.getGoodList(id);
      },
      toGooddetail(id) {
      },
      addShopCart(item) {
        try {
          let value = uni.getStorageSync("shopCart") || [];
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
            uni.setStorageSync("shopCart", value);
            uni.showToast({
              title: "\u5DF2\u6DFB\u52A0\u8FDB\u5165\u8D2D\u7269\u8F66",
              icon: "success",
              duration: 1e3
            });
          } catch (e) {
            uni.showToast({
              title: "\u52A0\u5165\u8D2D\u7269\u8F66\u5931\u8D25,\u8BF7\u8054\u7CFB\u5F00\u53D1\u4EBA\u5458",
              icon: "error",
              duration: 1e3
            });
          }
        } catch (e) {
          uni.showToast({
            title: "\u6570\u636E\u672A\u5B8C\u6210\u6E32\u67D3,\u8BF7\u8054\u7CFB\u5F00\u53D1\u4EBA\u5458",
            icon: "error",
            duration: 1e3
          });
        }
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "classify" }, [
      vue.createElementVNode("view", { class: "bar" }, [
        vue.createElementVNode("view", { class: "bar-list" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.barList, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: item.id,
              class: vue.normalizeClass([$data.currentTab == item.id ? "activeTab" : "", "bar-list-item"]),
              onClick: ($event) => $options.changeDetail(item.id)
            }, vue.toDisplayString(item.name), 11, ["onClick"]);
          }), 128))
        ])
      ]),
      vue.createElementVNode("scroll-view", { "scroll-y": "true" }, [
        vue.createElementVNode("view", { class: "right-content" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.dataList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: item.id,
              class: "good-item"
            }, [
              vue.createElementVNode("image", {
                src: item.coverImage,
                class: "good-image",
                onClick: ($event) => $options.toGooddetail(item.id)
              }, null, 8, ["src", "onClick"]),
              vue.createElementVNode("view", { class: "right-slide" }, [
                vue.createElementVNode("view", {
                  class: "good-name",
                  onClick: ($event) => $options.toGooddetail(item.id)
                }, vue.toDisplayString(item.name), 9, ["onClick"]),
                vue.createElementVNode("view", { class: "good-sale-num" }, [
                  vue.createTextVNode("\u5DF2\u552E"),
                  vue.createElementVNode("text", { class: "sale-num" }, vue.toDisplayString(item.saleNum), 1),
                  vue.createTextVNode(vue.toDisplayString(item.saledUnit), 1)
                ]),
                vue.createElementVNode("view", { class: "good-price" }, [
                  vue.createElementVNode("text", { class: "discount-price" }, [
                    vue.createElementVNode("text", { class: "big-font" }, vue.toDisplayString(item.discountPrice), 1),
                    vue.createTextVNode("\u5143/" + vue.toDisplayString(item.saledUnit), 1)
                  ]),
                  vue.createElementVNode("text", { class: "market-price" }, vue.toDisplayString(item.marketPric) + "\u5143/" + vue.toDisplayString(item.saledUnit), 1),
                  vue.createElementVNode("button", {
                    class: "item-buy",
                    onClick: ($event) => $options.addShopCart(item)
                  }, null, 8, ["onClick"])
                ])
              ])
            ]);
          }), 128))
        ])
      ])
    ]);
  }
  const PagesClassifyIndex = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "E:/uni-app/\u751F\u9C9Cgo/FreshGo/pages/classify/index.vue"]]);
  function setStorageSync(name, data) {
    try {
      uni.setStorageSync(name, data);
    } catch (e) {
      formatAppLog("log", "at utils/storage.js:5", e);
    }
  }
  const _sfc_main$6 = {
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
      this.shopCart = uni.getStorageSync("shopCart") || [];
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
        uni.showModal({
          title: "\u63D0\u793A",
          content: "\u786E\u5B9A\u8981\u5220\u9664\u5417?",
          success: (res) => {
            if (res.confirm) {
              that.shopCart = that.shopCart.filter((item, index) => {
                return item.checked !== true;
              });
              setStorageSync("shopCart", that.shopCart);
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
        setStorageSync("shopCart", this.shopCart);
      },
      subNum(index) {
        if (this.shopCart[index].buyNum > 1) {
          this.shopCart[index].buyNum--;
          this.countPrice();
          setStorageSync("shopCart", this.shopCart);
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
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "shop-cart-index" }, [
      vue.createCommentVNode(" \u6CA1\u6709\u5546\u54C1\u6570\u636E "),
      $data.shopCart.length === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "shop-none"
      }, [
        vue.createElementVNode("image", {
          src: "/static/images/shopCart/jingdog.png",
          class: "shop-none-image"
        }),
        vue.createElementVNode("text", { class: "shop-none-title" }, "\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"),
        vue.createElementVNode("text", { class: "shop-none-desc" }, "\u6211\u4EEC\u4E0D\u5982\u53BB\u901B\u901B\u5427")
      ])) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
        vue.createCommentVNode(" \u6709\u5546\u54C1\u6570\u636E "),
        vue.createElementVNode("view", { class: "shop-list" }, [
          vue.createElementVNode("scroll-view", { "scroll-y": "true" }, [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["switch", { active: $data.isActive }]),
              onClick: _cache[0] || (_cache[0] = ($event) => $options.handClickActive())
            }, [
              vue.createElementVNode("text")
            ], 2),
            vue.createElementVNode("checkbox-group", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.shopCart, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: item.id,
                  class: "list-item"
                }, [
                  vue.createElementVNode("checkbox", {
                    value: item.id.toString(),
                    checked: item.checked,
                    onClick: ($event) => $options.getCheckbox(index)
                  }, null, 8, ["value", "checked", "onClick"]),
                  vue.createElementVNode("image", {
                    src: item.coverImage,
                    class: "list-item-image"
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "list-item-right" }, [
                    vue.createElementVNode("text", { class: "list-item-name" }, vue.toDisplayString(item.name), 1),
                    vue.createElementVNode("text", { class: "list-item-dscp" }, [
                      vue.createElementVNode("text", { class: "list-item-sign" }, "\uFFE5"),
                      vue.createTextVNode(vue.toDisplayString(item.discountPrice), 1)
                    ]),
                    vue.createElementVNode("view", { class: "num-group" }, [
                      vue.createElementVNode("button", {
                        class: "buyAddSub",
                        onClick: ($event) => $options.subNum(index)
                      }, " - ", 8, ["onClick"]),
                      vue.createElementVNode("text", { class: "buy-num" }, vue.toDisplayString(item.buyNum), 1),
                      vue.createElementVNode("button", {
                        class: "buyAddSub",
                        onClick: ($event) => $options.addNum(index)
                      }, " + ", 8, ["onClick"])
                    ])
                  ])
                ]);
              }), 128))
            ])
          ]),
          vue.createElementVNode("view", { class: "under" }, [
            $data.isActive === false ? (vue.openBlock(), vue.createElementBlock("label", {
              key: 0,
              class: "all-select"
            }, [
              vue.createElementVNode("label", {
                onClick: _cache[1] || (_cache[1] = ($event) => $options.radioChange())
              }, [
                vue.createElementVNode("radio", {
                  value: "",
                  checked: $data.redioChecked
                }, null, 8, ["checked"]),
                vue.createElementVNode("text", { class: "all-select-word" }, "\u5168\u9009")
              ]),
              vue.createElementVNode("text", { class: "all-select-total" }, "\u5408\u8BA1:"),
              vue.createElementVNode("text", { class: "total-price" }, vue.toDisplayString($data.totalPrice), 1),
              vue.createElementVNode("button", { class: "to-pay" }, "\u4E70\u5355")
            ])) : (vue.openBlock(), vue.createElementBlock("label", {
              key: 1,
              class: "all-select"
            }, [
              vue.createElementVNode("label", {
                onClick: _cache[2] || (_cache[2] = ($event) => $options.radioChange())
              }, [
                vue.createElementVNode("radio", {
                  value: "",
                  checked: $data.redioChecked
                }, null, 8, ["checked"]),
                vue.createElementVNode("text", { class: "all-select-word" }, "\u5168\u9009")
              ]),
              vue.createElementVNode("button", {
                class: "detele",
                type: "warn",
                onClick: _cache[3] || (_cache[3] = (...args) => $options.deleteGood && $options.deleteGood(...args))
              }, "\u5220\u9664")
            ]))
          ])
        ])
      ], 2112))
    ]);
  }
  const PagesShopCartIndex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "E:/uni-app/\u751F\u9C9Cgo/FreshGo/pages/shopCart/index.vue"]]);
  const icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$5 = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
      class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, null, 6);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-d31e1c47"], ["__file", "E:/uni-app/\u751F\u9C9Cgo/FreshGo/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {};
    },
    methods: {},
    onLoad() {
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createCommentVNode(" \u767B\u5F55\u9009\u9879 "),
      vue.createElementVNode("view", null, [
        vue.createElementVNode("view", { class: "container" }, [
          vue.createElementVNode("image", {
            src: "/static/images/mine/wallhaven-4oewd5.jpg",
            class: "container-image"
          }),
          vue.createElementVNode("text", { class: "container-name" }, "\u751F\u9C9CGo"),
          vue.createElementVNode("view", { class: "container-icons" }, [
            vue.createVNode(_component_uni_icons, {
              type: "shop-filled",
              size: "30"
            }),
            vue.createVNode(_component_uni_icons, {
              type: "location",
              size: "30"
            }),
            vue.createVNode(_component_uni_icons, {
              type: "home",
              size: "30"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "flexicons" }, [
          vue.createElementVNode("view", { class: "flexicons-second" }, [
            vue.createElementVNode("view", { class: "flexicons-content" }, [
              vue.createVNode(_component_uni_icons, {
                type: "shop",
                size: "40",
                color: "#2D9A3A"
              }),
              vue.createElementVNode("text", { class: "flexicons-content-text" }, "\u8D2D\u7269")
            ]),
            vue.createElementVNode("view", { class: "flexicons-content" }, [
              vue.createVNode(_component_uni_icons, {
                type: "wallet",
                size: "40",
                color: "#2D9A3A"
              }),
              vue.createElementVNode("text", { class: "flexicons-content-text" }, "\u94B1\u5305")
            ]),
            vue.createElementVNode("view", { class: "flexicons-content" }, [
              vue.createVNode(_component_uni_icons, {
                type: "heart",
                size: "40",
                color: "#2D9A3A"
              }),
              vue.createElementVNode("text", { class: "flexicons-content-text" }, "\u6211\u7684\u6536\u85CF")
            ]),
            vue.createElementVNode("view", { class: "flexicons-content" }, [
              vue.createVNode(_component_uni_icons, {
                type: "home",
                size: "40",
                color: "#2D9A3A"
              }),
              vue.createElementVNode("text", { class: "flexicons-content-text" }, "\u6536\u8D27\u5730\u5740")
            ]),
            vue.createElementVNode("view", { class: "flexicons-content" }, [
              vue.createVNode(_component_uni_icons, {
                type: "gift",
                size: "40",
                color: "#2D9A3A"
              }),
              vue.createElementVNode("text", { class: "flexicons-content-text" }, "\u4F18\u60E0")
            ]),
            vue.createElementVNode("view", { class: "flexicons-content" }, [
              vue.createVNode(_component_uni_icons, {
                type: "phone",
                size: "40",
                color: "#2D9A3A"
              }),
              vue.createElementVNode("text", { class: "flexicons-content-text" }, "\u5BA2\u670D")
            ]),
            vue.createElementVNode("view", { class: "flexicons-content" }, [
              vue.createVNode(_component_uni_icons, {
                type: "cart",
                size: "40",
                color: "#2D9A3A"
              }),
              vue.createElementVNode("text", { class: "flexicons-content-text" }, "\u8D2D\u7269\u8F66")
            ]),
            vue.createElementVNode("view", { class: "flexicons-content" }, [
              vue.createVNode(_component_uni_icons, {
                type: "help",
                size: "40",
                color: "#2D9A3A"
              }),
              vue.createElementVNode("text", { class: "flexicons-content-text" }, "\u5BFB\u6C42\u5E2E\u52A9")
            ]),
            vue.createElementVNode("view", { class: "flexicons-content" }, [
              vue.createVNode(_component_uni_icons, {
                type: "staff",
                size: "40",
                color: "#2D9A3A"
              }),
              vue.createElementVNode("text", { class: "flexicons-content-text" }, "\u5E38\u770B\u5546\u94FA")
            ]),
            vue.createElementVNode("view", { class: "flexicons-content" }, [
              vue.createVNode(_component_uni_icons, {
                type: "vip",
                size: "40",
                color: "#2D9A3A"
              }),
              vue.createElementVNode("text", { class: "flexicons-content-text" }, "\u6211\u7684\u4F1A\u5458")
            ]),
            vue.createElementVNode("view", { class: "flexicons-content" }, [
              vue.createVNode(_component_uni_icons, {
                type: "chatboxes",
                size: "40",
                color: "#2D9A3A"
              }),
              vue.createElementVNode("text", { class: "flexicons-content-text" }, "\u8054\u7CFB\u5546\u94FA")
            ]),
            vue.createElementVNode("view", { class: "flexicons-content" }, [
              vue.createVNode(_component_uni_icons, {
                type: "chatbubble",
                size: "40",
                color: "#2D9A3A"
              }),
              vue.createElementVNode("text", { class: "flexicons-content-text" }, "\u8054\u7CFB\u5FEB\u9012\u5458")
            ])
          ])
        ])
      ])
    ], 2112);
  }
  const PagesMineIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "E:/uni-app/\u751F\u9C9Cgo/FreshGo/pages/mine/index.vue"]]);
  const _sfc_main$3 = {};
  function _sfc_render$2(_ctx, _cache) {
    return null;
  }
  const PagesMineLogin = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "E:/uni-app/\u751F\u9C9Cgo/FreshGo/pages/mine/login.vue"]]);
  const _sfc_main$2 = {};
  function _sfc_render$1(_ctx, _cache) {
    return null;
  }
  const PagesMineRegister = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "E:/uni-app/\u751F\u9C9Cgo/FreshGo/pages/mine/register.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return null;
  }
  const PagesGoodDetail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "E:/uni-app/\u751F\u9C9Cgo/FreshGo/pages/good/detail.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/classify/index", PagesClassifyIndex);
  __definePage("pages/shopCart/index", PagesShopCartIndex);
  __definePage("pages/mine/index", PagesMineIndex);
  __definePage("pages/mine/login", PagesMineLogin);
  __definePage("pages/mine/register", PagesMineRegister);
  __definePage("pages/good/detail", PagesGoodDetail);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/uni-app/\u751F\u9C9Cgo/FreshGo/App.vue"]]);
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var wx$1 = { exports: {} };
  (function(module, exports) {
    (function webpackUniversalModuleDefinition(root, factory) {
      module.exports = factory();
    })(commonjsGlobal, function() {
      return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
          if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
          }
          var module2 = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
          };
          modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
          module2.l = true;
          return module2.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.i = function(value) {
          return value;
        };
        __webpack_require__.d = function(exports2, name, getter) {
          if (!__webpack_require__.o(exports2, name)) {
            Object.defineProperty(exports2, name, {
              configurable: false,
              enumerable: true,
              get: getter
            });
          }
        };
        __webpack_require__.n = function(module2) {
          var getter = module2 && module2.__esModule ? function getDefault() {
            return module2["default"];
          } : function getModuleExports() {
            return module2;
          };
          __webpack_require__.d(getter, "a", getter);
          return getter;
        };
        __webpack_require__.o = function(object, property) {
          return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 13);
      }([
        function(module2, exports2, __webpack_require__) {
          var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
          } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
          module2.exports = {
            type: function type(ob) {
              return Object.prototype.toString.call(ob).slice(8, -1).toLowerCase();
            },
            isObject: function isObject(ob, real) {
              if (real) {
                return this.type(ob) === "object";
              } else {
                return ob && (typeof ob === "undefined" ? "undefined" : _typeof(ob)) === "object";
              }
            },
            isFormData: function isFormData(val) {
              return typeof FormData !== "undefined" && val instanceof FormData;
            },
            trim: function trim(str) {
              return str.replace(/(^\s*)|(\s*$)/g, "");
            },
            encode: function encode(val) {
              return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
            },
            formatParams: function formatParams(data) {
              var str = "";
              var first = true;
              var that = this;
              if (!this.isObject(data)) {
                return data;
              }
              function _encode(sub, path2) {
                var encode = that.encode;
                var type = that.type(sub);
                if (type == "array") {
                  sub.forEach(function(e, i) {
                    if (!that.isObject(e))
                      i = "";
                    _encode(e, path2 + ("%5B" + i + "%5D"));
                  });
                } else if (type == "object") {
                  for (var key in sub) {
                    if (path2) {
                      _encode(sub[key], path2 + "%5B" + encode(key) + "%5D");
                    } else {
                      _encode(sub[key], encode(key));
                    }
                  }
                } else {
                  if (!first) {
                    str += "&";
                  }
                  first = false;
                  str += path2 + "=" + encode(sub);
                }
              }
              _encode(data, "");
              return str;
            },
            merge: function merge(a, b) {
              for (var key in b) {
                if (!a.hasOwnProperty(key)) {
                  a[key] = b[key];
                } else if (this.isObject(b[key], 1) && this.isObject(a[key], 1)) {
                  this.merge(a[key], b[key]);
                }
              }
              return a;
            }
          };
        },
        function(module2, exports2, __webpack_require__) {
          var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
          } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
          var _createClass = function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                  descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps)
                defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          var util = __webpack_require__(0);
          var isBrowser = typeof document !== "undefined";
          function EngineWrapper(adapter) {
            var AjaxEngine = function() {
              function AjaxEngine2() {
                _classCallCheck(this, AjaxEngine2);
                this.requestHeaders = {};
                this.readyState = 0;
                this.timeout = 0;
                this.responseURL = "";
                this.responseHeaders = {};
              }
              _createClass(AjaxEngine2, [{
                key: "_call",
                value: function _call(name) {
                  this[name] && this[name].apply(this, [].splice.call(arguments, 1));
                }
              }, {
                key: "_changeReadyState",
                value: function _changeReadyState(state) {
                  this.readyState = state;
                  this._call("onreadystatechange");
                }
              }, {
                key: "open",
                value: function open(method, url) {
                  this.method = method;
                  if (!url) {
                    url = location.href;
                  } else {
                    url = util.trim(url);
                    if (url.indexOf("http") !== 0) {
                      if (isBrowser) {
                        var t = document.createElement("a");
                        t.href = url;
                        url = t.href;
                      }
                    }
                  }
                  this.responseURL = url;
                  this._changeReadyState(1);
                }
              }, {
                key: "send",
                value: function send(arg) {
                  var _this = this;
                  arg = arg || null;
                  var self2 = this;
                  if (adapter) {
                    var request = {
                      method: self2.method,
                      url: self2.responseURL,
                      headers: self2.requestHeaders || {},
                      body: arg
                    };
                    util.merge(request, self2._options || {});
                    if (request.method === "GET") {
                      request.body = null;
                    }
                    self2._changeReadyState(3);
                    var timer2 = void 0;
                    self2.timeout = self2.timeout || 0;
                    if (self2.timeout > 0) {
                      timer2 = setTimeout(function() {
                        if (self2.readyState === 3) {
                          _this._call("onloadend");
                          self2._changeReadyState(0);
                          self2._call("ontimeout");
                        }
                      }, self2.timeout);
                    }
                    request.timeout = self2.timeout;
                    adapter(request, function(response) {
                      function getAndDelete(key2) {
                        var t = response[key2];
                        delete response[key2];
                        return t;
                      }
                      if (self2.readyState !== 3)
                        return;
                      clearTimeout(timer2);
                      self2.status = getAndDelete("statusCode") - 0;
                      var responseText = getAndDelete("responseText");
                      var statusMessage = getAndDelete("statusMessage");
                      if (!self2.status) {
                        self2.statusText = responseText;
                        self2._call("onerror", { msg: statusMessage });
                      } else {
                        var responseHeaders = getAndDelete("headers");
                        var headers = {};
                        for (var field in responseHeaders) {
                          var value = responseHeaders[field];
                          var key = field.toLowerCase();
                          if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                            headers[key] = value;
                          } else {
                            headers[key] = headers[key] || [];
                            headers[key].push(value);
                          }
                        }
                        var cookies = headers["set-cookie"];
                        if (isBrowser && cookies) {
                          cookies.forEach(function(e) {
                            document.cookie = e.replace(/;\s*httpOnly/ig, "");
                          });
                        }
                        self2.responseHeaders = headers;
                        self2.statusText = statusMessage || "";
                        self2.response = self2.responseText = responseText;
                        self2._response = response;
                        self2._changeReadyState(4);
                        self2._call("onload");
                      }
                      self2._call("onloadend");
                    });
                  } else {
                    formatAppLog("error", "at node_modules/flyio/dist/npm/wx.js:311", "Ajax require adapter");
                  }
                }
              }, {
                key: "setRequestHeader",
                value: function setRequestHeader(key, value) {
                  this.requestHeaders[util.trim(key)] = value;
                }
              }, {
                key: "getResponseHeader",
                value: function getResponseHeader(key) {
                  return (this.responseHeaders[key.toLowerCase()] || "").toString() || null;
                }
              }, {
                key: "getAllResponseHeaders",
                value: function getAllResponseHeaders() {
                  var str = "";
                  for (var key in this.responseHeaders) {
                    str += key + ":" + this.getResponseHeader(key) + "\r\n";
                  }
                  return str || null;
                }
              }, {
                key: "abort",
                value: function abort(msg) {
                  this._changeReadyState(0);
                  this._call("onerror", { msg });
                  this._call("onloadend");
                }
              }], [{
                key: "setAdapter",
                value: function setAdapter(requestAdapter) {
                  adapter = requestAdapter;
                }
              }]);
              return AjaxEngine2;
            }();
            return AjaxEngine;
          }
          module2.exports = EngineWrapper;
        },
        function(module2, exports2, __webpack_require__) {
          var _createClass = function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                  descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps)
                defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          var utils = __webpack_require__(0);
          var isBrowser = typeof document !== "undefined";
          var Fly2 = function() {
            function Fly3(engine) {
              _classCallCheck(this, Fly3);
              this.engine = engine || XMLHttpRequest;
              this.default = this;
              function wrap(interceptor) {
                var resolve = void 0;
                var reject = void 0;
                function _clear() {
                  interceptor.p = resolve = reject = null;
                }
                utils.merge(interceptor, {
                  lock: function lock() {
                    if (!resolve) {
                      interceptor.p = new Promise(function(_resolve, _reject) {
                        resolve = _resolve;
                        reject = _reject;
                      });
                    }
                  },
                  unlock: function unlock() {
                    if (resolve) {
                      resolve();
                      _clear();
                    }
                  },
                  clear: function clear() {
                    if (reject) {
                      reject("cancel");
                      _clear();
                    }
                  }
                });
              }
              var interceptors = this.interceptors = {
                response: {
                  use: function use(handler, onerror) {
                    this.handler = handler;
                    this.onerror = onerror;
                  }
                },
                request: {
                  use: function use(handler) {
                    this.handler = handler;
                  }
                }
              };
              var irq = interceptors.request;
              var irp = interceptors.response;
              wrap(irp);
              wrap(irq);
              this.config = {
                method: "GET",
                baseURL: "",
                headers: {},
                timeout: 0,
                params: {},
                parseJson: true,
                withCredentials: false
              };
            }
            _createClass(Fly3, [{
              key: "request",
              value: function request(url, data, options) {
                var _this = this;
                var engine = new this.engine();
                var contentType = "Content-Type";
                var contentTypeLowerCase = contentType.toLowerCase();
                var interceptors = this.interceptors;
                var requestInterceptor = interceptors.request;
                var responseInterceptor = interceptors.response;
                var requestInterceptorHandler = requestInterceptor.handler;
                var promise = new Promise(function(resolve, reject) {
                  if (utils.isObject(url)) {
                    options = url;
                    url = options.url;
                  }
                  options = options || {};
                  options.headers = options.headers || {};
                  function isPromise(p) {
                    return p && p.then && p.catch;
                  }
                  function enqueueIfLocked(promise2, callback) {
                    if (promise2) {
                      promise2.then(function() {
                        callback();
                      });
                    } else {
                      callback();
                    }
                  }
                  function makeRequest(options2) {
                    data = options2.body;
                    url = utils.trim(options2.url);
                    var baseUrl = utils.trim(options2.baseURL || "");
                    if (!url && isBrowser && !baseUrl)
                      url = location.href;
                    if (url.indexOf("http") !== 0) {
                      var isAbsolute = url[0] === "/";
                      if (!baseUrl && isBrowser) {
                        var arr = location.pathname.split("/");
                        arr.pop();
                        baseUrl = location.protocol + "//" + location.host + (isAbsolute ? "" : arr.join("/"));
                      }
                      if (baseUrl[baseUrl.length - 1] !== "/") {
                        baseUrl += "/";
                      }
                      url = baseUrl + (isAbsolute ? url.substr(1) : url);
                      if (isBrowser) {
                        var t = document.createElement("a");
                        t.href = url;
                        url = t.href;
                      }
                    }
                    var responseType = utils.trim(options2.responseType || "");
                    var needQuery = ["GET", "HEAD", "DELETE", "OPTION"].indexOf(options2.method) !== -1;
                    var dataType = utils.type(data);
                    var params = options2.params || {};
                    if (needQuery && dataType === "object") {
                      params = utils.merge(data, params);
                    }
                    params = utils.formatParams(params);
                    var _params = [];
                    if (params) {
                      _params.push(params);
                    }
                    if (needQuery && data && dataType === "string") {
                      _params.push(data);
                    }
                    if (_params.length > 0) {
                      url += (url.indexOf("?") === -1 ? "?" : "&") + _params.join("&");
                    }
                    engine.open(options2.method, url);
                    try {
                      engine.withCredentials = !!options2.withCredentials;
                      engine.timeout = options2.timeout || 0;
                      if (responseType !== "stream") {
                        engine.responseType = responseType;
                      }
                    } catch (e) {
                    }
                    var customContentType = options2.headers[contentType] || options2.headers[contentTypeLowerCase];
                    var _contentType = "application/x-www-form-urlencoded";
                    if (utils.trim((customContentType || "").toLowerCase()) === _contentType) {
                      data = utils.formatParams(data);
                    } else if (!utils.isFormData(data) && ["object", "array"].indexOf(utils.type(data)) !== -1) {
                      _contentType = "application/json;charset=utf-8";
                      data = JSON.stringify(data);
                    }
                    if (!(customContentType || needQuery)) {
                      options2.headers[contentType] = _contentType;
                    }
                    for (var k in options2.headers) {
                      if (k === contentType && utils.isFormData(data)) {
                        delete options2.headers[k];
                      } else {
                        try {
                          engine.setRequestHeader(k, options2.headers[k]);
                        } catch (e) {
                        }
                      }
                    }
                    function onresult(handler, data2, type) {
                      enqueueIfLocked(responseInterceptor.p, function() {
                        if (handler) {
                          if (type) {
                            data2.request = options2;
                          }
                          var ret = handler.call(responseInterceptor, data2, Promise);
                          data2 = ret === void 0 ? data2 : ret;
                        }
                        if (!isPromise(data2)) {
                          data2 = Promise[type === 0 ? "resolve" : "reject"](data2);
                        }
                        data2.then(function(d) {
                          resolve(d);
                        }).catch(function(e) {
                          reject(e);
                        });
                      });
                    }
                    function onerror(e) {
                      e.engine = engine;
                      onresult(responseInterceptor.onerror, e, -1);
                    }
                    function Err(msg, status) {
                      this.message = msg;
                      this.status = status;
                    }
                    engine.onload = function() {
                      try {
                        var response = engine.response || engine.responseText;
                        if (response && options2.parseJson && (engine.getResponseHeader(contentType) || "").indexOf("json") !== -1 && !utils.isObject(response)) {
                          response = JSON.parse(response);
                        }
                        var headers = engine.responseHeaders;
                        if (!headers) {
                          headers = {};
                          var items = (engine.getAllResponseHeaders() || "").split("\r\n");
                          items.pop();
                          items.forEach(function(e2) {
                            if (!e2)
                              return;
                            var key = e2.split(":")[0];
                            headers[key] = engine.getResponseHeader(key);
                          });
                        }
                        var status = engine.status;
                        var statusText = engine.statusText;
                        var _data = { data: response, headers, status, statusText };
                        utils.merge(_data, engine._response);
                        if (status >= 200 && status < 300 || status === 304) {
                          _data.engine = engine;
                          _data.request = options2;
                          onresult(responseInterceptor.handler, _data, 0);
                        } else {
                          var e = new Err(statusText, status);
                          e.response = _data;
                          onerror(e);
                        }
                      } catch (e2) {
                        onerror(new Err(e2.msg, engine.status));
                      }
                    };
                    engine.onerror = function(e) {
                      onerror(new Err(e.msg || "Network Error", 0));
                    };
                    engine.ontimeout = function() {
                      onerror(new Err("timeout [ " + engine.timeout + "ms ]", 1));
                    };
                    engine._options = options2;
                    setTimeout(function() {
                      engine.send(needQuery ? null : data);
                    }, 0);
                  }
                  enqueueIfLocked(requestInterceptor.p, function() {
                    utils.merge(options, JSON.parse(JSON.stringify(_this.config)));
                    var headers = options.headers;
                    headers[contentType] = headers[contentType] || headers[contentTypeLowerCase] || "";
                    delete headers[contentTypeLowerCase];
                    options.body = data || options.body;
                    url = utils.trim(url || "");
                    options.method = options.method.toUpperCase();
                    options.url = url;
                    var ret = options;
                    if (requestInterceptorHandler) {
                      ret = requestInterceptorHandler.call(requestInterceptor, options, Promise) || options;
                    }
                    if (!isPromise(ret)) {
                      ret = Promise.resolve(ret);
                    }
                    ret.then(function(d) {
                      if (d === options) {
                        makeRequest(d);
                      } else {
                        resolve(d);
                      }
                    }, function(err) {
                      reject(err);
                    });
                  });
                });
                promise.engine = engine;
                return promise;
              }
            }, {
              key: "all",
              value: function all(promises) {
                return Promise.all(promises);
              }
            }, {
              key: "spread",
              value: function spread(callback) {
                return function(arr) {
                  return callback.apply(null, arr);
                };
              }
            }]);
            return Fly3;
          }();
          Fly2.default = Fly2;
          ["get", "post", "put", "patch", "head", "delete"].forEach(function(e) {
            Fly2.prototype[e] = function(url, data, option) {
              return this.request(url, data, utils.merge({ method: e }, option));
            };
          });
          ["lock", "unlock", "clear"].forEach(function(e) {
            Fly2.prototype[e] = function() {
              this.interceptors.request[e]();
            };
          });
          module2.exports = Fly2;
        },
        ,
        ,
        ,
        ,
        function(module2, exports2, __webpack_require__) {
          module2.exports = function(request, responseCallback) {
            var con = {
              method: request.method,
              url: request.url,
              dataType: request.dataType || void 0,
              header: request.headers,
              data: request.body || {},
              responseType: request.responseType || "text",
              success: function success(res) {
                responseCallback({
                  statusCode: res.statusCode,
                  responseText: res.data,
                  headers: res.header,
                  statusMessage: res.errMsg
                });
              },
              fail: function fail(res) {
                responseCallback({
                  statusCode: res.statusCode || 0,
                  statusMessage: res.errMsg
                });
              }
            };
            wx.request(con);
          };
        },
        ,
        ,
        ,
        ,
        ,
        function(module2, exports2, __webpack_require__) {
          var _Fly = __webpack_require__(2);
          var EngineWrapper = __webpack_require__(1);
          var adapter = __webpack_require__(7);
          var wxEngine = EngineWrapper(adapter);
          module2.exports = function(engine) {
            return new _Fly(engine || wxEngine);
          };
        }
      ]);
    });
  })(wx$1);
  const Fly = /* @__PURE__ */ getDefaultExportFromCjs(wx$1.exports);
  let basePath = "";
  {
    basePath = "http://172.17.49.236:8806";
  }
  const path = {
    basePath
  };
  const fly = new Fly();
  fly.config.timeout = 2e4;
  fly.config.baseURL = path.basePath;
  fly.interceptors.request.use((config, promise) => {
    return config;
  });
  fly.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (err) => {
      uni.showModal({
        title: "\u63D0\u793A",
        content: `${err.message}`,
        showCancel: false
      });
    }
  );
  class ServerBase {
    constructor() {
    }
    getRequest(url = "", params = "", data = null) {
      return fly.request(`${url}/${params}`, data, {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        }
      });
    }
    postRequest(url = "", params = null, data = "") {
      return fly.request(`${url}`, params, {
        method: "POST"
      });
    }
  }
  class HttpServer extends ServerBase {
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
  function createApp() {
    const app = vue.createVueApp(App);
    app.config.globalProperties.$Http = $HttpServer;
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
