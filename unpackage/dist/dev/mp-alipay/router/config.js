"use strict";
const routes = [
  {
    path: "/pages/index/index",
    name: "index/index"
  },
  {
    path: "/pages/classify/index/:categoryId?",
    name: "classify/index"
  },
  {
    path: "/pages/shopCart/index",
    name: "shopCart/index"
  },
  {
    path: "/pages/mine/index",
    name: "mine/index"
  },
  {
    path: "/pages/mine/login",
    name: "mine/login"
  },
  {
    path: "/pages/mine/register",
    name: "mine/register"
  },
  {
    path: "/pages/good/detail",
    name: "good/detail"
  }
];
exports.routes = routes;
