import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/shop/index'
import Order from '@/components/shop/order'
import Rating from '@/components/shop/rating'
import Shop from '@/components/shop/shop'

import Admin from '@/components/pages/admin'
import Detail from '@/components/pages/detail'
import Account from '@/components/pages/account'
import Login from '@/components/pages/login'
import Rate from '@/components/pages/rate'

export default [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/account',
      component: Account
    },
    {
      path: '/rate',
      component: Rate
    },
    {
      path: '/shop',
      component: Index,
      children: [
        {
          path: '/',
          redirect: 'order'
        },
        {
          path: 'order',
          component: Order
        },
        {
          path: 'rating',
          component: Rating
        },
        {
          path: 'shop',
          component: Shop
        }
      ]
    },
]
