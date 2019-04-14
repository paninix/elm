export default [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: resolve => require(['@/components/pages/login/ui'],resolve)
    },
    {
      path: '/admin',
      component: resolve => require(['@/components/pages/admin/ui'],resolve)
    },
    {
      path: '/detail',
      component: resolve => require(['@/components/pages/detail/ui'],resolve)
    },
    {
      path: '/account',
      component: resolve => require(['@/components/pages/account/ui'],resolve)
    },
    {
      path: '/rate',
      component: resolve => require(['@/components/pages/rate/ui'],resolve)
    },
    {
      path: '/shop',
      component: resolve => require(['@/components/shop/index/ui'],resolve),
      children: [
        {
          path: '/',
          redirect: 'order'
        },
        {
          path: 'order',
          component: resolve => require(['@/components/shop/order/ui'],resolve)
        },
        {
          path: 'rating',
          component: resolve => require(['@/components/shop/rating/ui'],resolve)
        },
        {
          path: 'shop',
          component: resolve => require(['@/components/shop/shop/ui'],resolve)
        }
      ]
    },
]
