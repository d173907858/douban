import Vue from 'vue'
import Router from 'vue-router'
import Columns from '@/components/page/Columns/Columns'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/columns',
      name: 'Columns',
      component: Columns
    }
  ]
})
