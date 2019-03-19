import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

//element-ui引入config
import "./element_config"

//初始化样式
import "assets/scss/reset.scss"
import "assets/scss/common.scss";

//路由拦截
import "./router/beforEach"


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')