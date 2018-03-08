import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
     {
       path:'/home',
       name:'Home',
       component:() => import('@/components/page/Home/Home')
     },
     {
      path: '/list/:id',
      name: 'List',
      component: () => import('@/components/page/List/List')
    },
    {
      path: '/homedetail/:id',
      name: 'HomeDetail',
      component: () => import('@/components/page/HomeDetail/HomeDetail')
    },
    {
      path: '/columns',
      name: 'Columns',
      component: () => import('@/components/page/Columns/Columns')
    },
    {path: '/column/:id',
      name: 'Column',
      component: () => import('@/components/page/ColumnDetail/Detail'),
      props: true
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/page/Login/Login')
    }
  ]
})
