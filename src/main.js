// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 解决鼠标点击300ms延迟
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'
import 'babel-polyfill' // 兼容部分浏览器的proxy不支持问题
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 等于router : router
  store,
  components: { App }, // ES6语法：键和值是一样的时候，只需要写一个
  template: '<App/>'
})
