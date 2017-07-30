import Vue from 'vue'
import Router from 'vue-router'
import Index from './../components/Index.vue'
import resume from './resume.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        ...resume
      ]
    }
  ]
})
