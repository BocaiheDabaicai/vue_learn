import Vue from 'vue'
import App from './App.vue'
//引入路由器
import VueRouter from "vue-router";
//引入路由页面
import router from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})
