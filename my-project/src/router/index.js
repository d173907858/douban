import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/page/Home/Home'
import Columns from '@/components/page/Columns/Columns'
import List from '../components/page/List/List'
import HomeDetail from '../components/page/HomeDetail/HomeDetail'
import Column from '@/components/page/ColumnDetail/Detail'
import Login from '@/components/page/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
     {
       path:'/home',
       name:'Home',
       component:Home

     },
     {
      path: '/list/:id',
      name: 'List',
      component: List
    },
    {
      path: '/homedetail/:id',
      name: 'HomeDetail',
      component: HomeDetail
    },
    {
      path: '/columns',
      name: 'Columns',
      component: Columns
    },
    {path: '/column/:id',
      name: 'Column',
      component: Column,
      props: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
