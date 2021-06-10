/*
 * @Description: main
 * @Author: HTMoon 社区人员
 * @Date: 2021-06-10 10:52:41
 * @LastEditTime: 2021-06-10 16:32:13
 */


import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './locales/index'
import vuetify from './plugins/vuetify'
import "./styles/index.scss";

Vue.config.productionTip = false


new Vue({
 router,
 store,
 i18n,
 vuetify,
 render: h => h(App)
}).$mount('#app')
