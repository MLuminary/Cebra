import Vue from 'vue'
import Router from 'vue-router'

import MyClass from 'views/MyClass'
import ChatSquare from 'views/ChatSquare'
import PersonalCenter from 'views/PersonalCenter'

import Spending from 'views/modules/Spending'
import Material from 'views/modules/Material'
import Vote from 'views/modules/Vote'
import Schedule from 'views/modules/Schedule'
import Trends from 'views/modules/Trends'
import Tyfon from 'views/modules/Tyfon'
import Timetable from 'views/modules/Timetable'
import Ipa from 'views/modules/Ipa'

import AddItem from 'components/Spending/addItem'

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
      component: MyClass,
      children: [
        {
          path: 'spending',
          component: Spending,
          children: [
            {
              path: 'additem',
              component: AddItem
            }
          ]
        },
        {
          path: 'material',
          component: Material
        },
        {
          path: 'vote',
          component: Vote
        },
        {
          path: 'schedule',
          component: Schedule
        },
        {
          path: 'trends',
          component: Trends
        },
        {
          path: 'tyfon',
          component: Tyfon
        },
        {
          path: 'timetable',
          component: Timetable
        },
        {
          path: 'ipa',
          component: Ipa
        }
      ]
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
