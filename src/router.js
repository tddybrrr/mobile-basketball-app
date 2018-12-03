import Vue from 'vue'
import Router from 'vue-router'
import Matchups from './views/Matchups.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'matchups',
      component: Matchups
    },
    {
      path: '/standings',
      name: 'standings',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Standings.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Chat.vue')
    }
  ]
})
