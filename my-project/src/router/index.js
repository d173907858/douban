import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/page/Home/Home'
import Columns from '@/components/page/Columns/Columns'
import List from '../components/page/List/List'
import HomeDetail from '../components/page/HomeDetail/HomeDetail'
import Cars from '../components/page/Cars/Cars.vue'
import Mine from '../components/page/Mine/Mine.vue'
import Column from '@/components/page/ColumnDetail/Detail'

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
      path: '/columns',
      name: 'Columns',
      component: Columns
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
      path: '/cars',
      name: 'Cars',
      component: Cars
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    { path: '/column/:id',
      name: 'Column',
      component: Column,
      props: true
    }
  ]
})
