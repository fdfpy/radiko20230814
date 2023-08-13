/* eslint-disable */ 
import Vue from 'vue'
import Router from 'vue-router'
import Radiko from '@/components/Radiko'
import Kaden from '@/components/Kaden'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/radiko',
      name: 'radiko',
      component: Radiko
    },
    {
      path: '/',
      name: 'radiko',
      component: Radiko
    },

    {
      path: '/kaden/',
      name: 'kaden',
      component: Kaden
    },

  ]
})