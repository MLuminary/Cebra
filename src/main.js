import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import ElementUI from 'element-ui'
import 'common/stylus/index.styl'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.develtools = true
Vue.config.productionTip = false

fastclick.attach(document.body)

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
