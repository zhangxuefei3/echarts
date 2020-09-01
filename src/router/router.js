import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/Home.vue'
import about from '../views/About.vue'
import User from '../views/User.vue'

Vue.use(Router)

// router.beforeEach((to, from, next) => {
//     // to代表了route数组中的一个路由
//     document.title = to.meta.match[0].title
//     next()
// })
const constantRoutes = [
    {
        path: '/',
        // 首页重定向
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        meta:{
          title: '首页'
        },
        component: home,
        children: [
          {
              path: 'news',
              component: (resolve) => require(['../views/HomeNews.vue'], resolve),
          },
          {
              path: 'message',
              component: (resolve) => require(['../views/HomeMessage.vue'], resolve),
          }
        ]
      },
      {
        path: '/About',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        component: about
      },
      {
          path: '/user/:userId',
          name: 'user',
          component: User
      },
      {
          path: '/profile',
          name: 'profile',
          component: (resolve) => require(['../views/ProfileMock.vue'], resolve)
      },
      {
        path: '/video',
        name: 'video',
        component: (resolve) => require(['../views/video.vue'], resolve)
      },
      {
        path: '/echarts',
        name: 'echarts',
        component: (resolve) => require(['../views/ECharts.vue'], resolve)
      }
      
]
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes
})
// 前置钩子需要执行next(), aftereach 不需要，Hook都是回调函数
router.beforeEach((to, from, next) => {
    // to代表了route数组中的一个路由
    document.title = to.meta.title
    next()
})

export default router

