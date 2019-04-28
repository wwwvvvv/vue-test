import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import HelloWorld from '@/components/HelloWorld'
import Pos from '@/components/page/Pos'
import leftNav from '@/components/page/leftNav'

Vue.use(Router);
Vue.use(ElementUI);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pos',
      component: Pos
    },
    // {
    //   path: '/leftNav',
    //   name: 'leftNav',
    //   component: leftNav
    // }
  ]
})
