import Vue from 'vue'
import Router from 'vue-router'
import Columns from '@/components/page/Columns/Columns'
import Column from '@/components/page/ColumnDetail/Detail'
import Login from '@/components/page/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/columns',
      name: 'Columns',
      component: Columns
    },
    {
      path: '/column/:id',
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
