import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './views/LandingPage.vue'

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPage
    },
    {
      path: '/matchups',
      name: 'matchups',
      component: () => import(/* webpackChunkName: "about" */ './views/Matchups.vue')
    },
    {
      path: '/standings',
      name: 'standings',
      component: () => import(/* webpackChunkName: "about" */ './views/Standings.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import(/* webpackChunkName: "about" */ './views/Chat.vue')
    }
  ]
})
