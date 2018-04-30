import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

import routes from './router'

const router = new Router({
  routes
})

// 路由钩子
router.beforeEach(({path},from,next)=>{

  let isLogin = store.state.isLogin;

  if(!isLogin && path !== '/login'){
    return next({path:'/login'})
  }

  next();

})

export default router
