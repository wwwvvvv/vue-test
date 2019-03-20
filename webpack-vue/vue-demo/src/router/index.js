import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import userCenter from '@/pages/userCenter'
import qjapi from '@/components/QjApi'
import hi from '@/components/Hi'
import hi1 from '@/components/Hi1'
import hi2 from '@/components/Hi2'
import error from '@/components/Error'
import vuex1 from '@/components/Vuex1'
import vuex2 from '@/components/Vuex2'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: error
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      // alias: '/index',
      meta: {
        title: '首页'
      }
    },
    {
      path: '/userCenter',
      component: userCenter,
      meta: {
        title: '用户中心'
      }
    },
    {
      path: '/qj-api',
      component: qjapi,
      meta: {
        title: '全局API'
      }
    },
    {
      path: '/hi',
      component: hi,
      meta: {
        title: 'hi page'
      },
      // components: {
      //   default: hi,
      //   part1: hi1,
      //   part2: hi2
      // }
      children: [
        {
          path: '/',
          component: hi1,
          name: 'hi1',
          meta: {
            title: 'hi-1 page'
          }
        },
        {
          path: 'hi1/:newsId(\\d+)/:newsTit',
          component: hi1,
          meta: {
            title: 'hi-1 page'
          }
        },
        {
          path: 'hi2',
          // redirect: to => {
          //   console.log('to', to);
          //   return '/index'
          // },
          // redirect: '/hi',
          component: hi2,
          beforeEnter(to, from, next){
            console.log('beforeEnter-to', to);
            console.log('beforeEnter-from', from);
            next('/');
          },
          // alias: 'hi3',
          meta: {
            title: 'hi-2 page'
          }
        }
      ]
    },
    {
      path: '/vuex1',
      component: vuex1,
      meta: {
        title: 'vuex1 test'
      }
    },
    {
      path: '/vuex2',
      component: vuex2,
      meta: {
        title: 'vuex2 test'
      }
    }
    // {
    //   path: '/hi/hi1',
    //   component: hi1,
    //   meta: {
    //     title: 'hi-1 page'
    //   }
    // },
    // {
    //   path: '/hi/hi2',
    //   component: hi2,
    //   meta: {
    //     title: 'hi-2 page'
    //   }
    // }
  ]
})
