import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/page/Home/Home'
import Columns from '@/components/page/Columns/Columns'
import List from '../components/page/List/List'
Vue.use(Router)

export default new Router({
  routes: [
     {
       path:'/home',
       name:'Home',
       component:Home

     },
    {
      path: '/columns',
      name: 'Columns',
      component: Columns
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
