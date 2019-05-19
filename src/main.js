import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './mock.js'
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css'
Vue.prototype.$ajax = axios
// Vue.prototype.back=function(){
//   $router.go(-1)
// }
//  全局守卫  在每次路由跳转时都要判断是否已在本地登录过
router.beforeEach((to, from, next) => {
  var userInfo = window.localStorage.getItem('loginInfo');//获取浏览器缓存的用户信息
  if(userInfo){ //如果有就直接跳转到相应页面
      next();
  } else {
      if(to.path=='/login'){ //如果是登录页面路径，就直接next()
          next();
      } else { //不然就跳转到登录；
          next('/login');
      }

  }
})
Vue.use(axios)
Vue.use(Mint)
// Vue.use(VueLazyLoad)
Vue.use(VueLazyLoad, {
  preLoad: 1,
  // error: require('./assets/img/error.jpg'),
  // loading: require('./assets/img/homePage_top.jpg'),
  attempt: 2
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
