// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import config from './modules/config'
Vue.config.productionTip = false

//swiper
import '../node_modules/swiper/dist/css/swiper.min.css'
//mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
/* eslint-disable no-new */
//store
import store from  './store'
//filters
import './modules/filters'
new Vue({
  el: '#app',
  router,
  data: { config },
  store,
  components: { App },
  template: '<App/>'
})
