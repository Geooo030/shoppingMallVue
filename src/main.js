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
(function flexible (window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1

  // adjust body font size
  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit () {
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))
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
