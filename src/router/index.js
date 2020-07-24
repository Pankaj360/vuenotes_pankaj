import Vue from 'vue'
import Router from 'vue-router'
import VueNotes from '@/components/VueNotes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VueNotes',
      component: VueNotes
    }
  ]
})
