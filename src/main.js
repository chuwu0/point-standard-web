import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

//element-ui引入config
import "./element_config"

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')