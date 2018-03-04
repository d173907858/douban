import Vue from 'vue'
import Router from 'vue-router'
import Columns from '@/components/page/Columns/Columns'
import Column from '@/components/page/ColumnDetail/Detail'

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
    }
  ]
})
