import Vue from 'vue'
import ElementUI from 'element-ui'
// import Resource from 'vue-resource'
import VueRouter from 'vue-router'
import Bars from 'vuebars'
import vueEventCalendar from 'vue-event-calendar'
import routes from './routes'
import store from './store'
import VueAnimateNumber from 'vue-animate-number'
import VueGmaps from 'vue-gmaps'
import VueLayers from 'vuelayers'
import VCharts from 'v-charts'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'
Vue.prototype.qs = qs
Vue.prototype.$https = axios

// import api from './api/index'
// import vueI18n from 'vue-i18n'

// Resource logic
// Vue.use(Resource)
// Vue.http.options.emulateJSON = true
// window.$ = window.jQuery = jquery
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Bars)
Vue.use(Vuex)
// Vue.use(VueI18n)

// 实例化的i8n
// const i18n = new VueI18n({
//   locale:"zh",
//   message:{
//     "zh":""

//   }
// })


Vue.use(vueEventCalendar, {locale: 'en'})
Vue.use(VueAnimateNumber)
Vue.use(VueGmaps, {
  key: 'AIzaSyCpr35b_ZSoP8nbz0VnBjVz6ABb7iurRCU',
  libraries: ['places'],
  version: '3'
})
Vue.use(VueLayers)
Vue.use(VCharts)


import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'material-design-icons/iconfont/material-icons.css'
import 'dripicons/webfont/webfont.css'
import 'vuelayers/lib/style.css'

var router = new VueRouter({
  routes: routes,
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

if (window.localStorage) {
  if (store.state.token !== window.localStorage.getItem('token')) {
    store.commit('SET_TOKEN', window.localStorage.getItem('token'))
  }
}

new Vue({
  el: '#app',
  // i18n,
  router: router,
  store: store,
  render: h => h(App)
})

require('bootstrap')
require('../node_modules/admin-lte/dist/js/app.min.js')
require('../node_modules/admin-lte/dist/js/demo.js')
require('../node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.js')
