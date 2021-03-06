// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mixins from './mixins'
import http from './service/request'
import el from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import cookie from "vue-cookie"
import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'

Vue.config.productionTip = false
Vue.mixin(mixins)
Vue.use(el);
Vue.use(cookie);

Vue.prototype.$http=http;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
