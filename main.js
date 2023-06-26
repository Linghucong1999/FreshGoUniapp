import App from './App'
import Http from './http/HttpServer.js'
// #ifndef VUE3
import Vue from 'vue'
import './router'

Vue.config.productionTip = false
Vue.prototype.$Http = Http
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
    createSSRApp
} from 'vue'

//#ifdef H5
import router from './router/index.js'
//#endif

export function createApp() {
    const app = createSSRApp(App)
	app.config.globalProperties.$Http=Http
	//#ifdef H5
	app.config.globalProperties.router=router
	//#endif
    return {
        app
    }
}
// #endif