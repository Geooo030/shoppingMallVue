import Vue from 'vue'
import Router from 'vue-router'
import shop from './components/shop.vue'
import detail from './components/detail.vue'
import swipe from './components/swipe.vue'
import popup from './components/popup.vue'
import cart from './components/cart.vue'
import search from './components/search.vue'
import cartedit from './components/cartedit.vue'
import login from './components/login.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/shop',
      component:shop,
      meta:{'footer':true}
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/detail',
      name:'detail',
      component: detail,
    },
    {
      path:'/',
      redirect:'/shop'
    },{
      path:'/swipe',
      name:'swipe',
      component:swipe
    },{
      path:'/popup',
      name:popup,
      component:popup
    },{
      path:'/cart',
      component:cart
    }
    ,{
      path:'/search',
      component:search
    },{
      path:'/cartedit',
      component:cartedit
    },{
      path:'/login',
      component:login
    }
  ]
})

