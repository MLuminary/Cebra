import Vue from 'vue'
import Router from 'vue-router'

import MyClass from 'views/MyClass'
import ChatSquare from 'views/ChatSquare'
import PersonalCenter from 'views/PersonalCenter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/class'
    },
    {
      path: '/class',
      component: MyClass
    },
    {
      path: '/square',
      component: ChatSquare
    },
    {
      path: '/personal',
      component: PersonalCenter
    }
  ]
})
