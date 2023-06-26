// import Vue from 'vue'
// import { createRouter, createWebHistory } from 'vue-router'
// import routes from './config.js'
// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })
// // 全局路由守卫
// router.beforeEach((to, from, next) => {
//   next()
// })
// export default router


import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './config.js'
const router = createRouter({
  history: createWebHashHistory(),
  routes, 	
})
router.beforeEach((to, from, next) => {
	// document.contentType = 'text/javascript'
	next()
})
export default router