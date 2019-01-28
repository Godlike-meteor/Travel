import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/home/Home')
    }, {
      path: '/city',
      name: 'city',
      component: () => import('@/components/city/City')
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/components/detail/Detail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
