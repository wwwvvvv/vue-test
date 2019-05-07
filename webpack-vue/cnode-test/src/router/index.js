import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PostList from '@/components/PostList'
import Article from '@/components/Article'
import SideBar from '@/components/SideBar'
import UserInfo from '@/components/UserInfo'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        main: PostList
      }
    },
    {
      name: 'post_content',
      path: '/topic/:id&author=:name', // 动态传值
      components: {
        main: Article, // 渲染到router-view里面的组件
        sidebar: SideBar  // 渲染到router-view里面的组件
      }
    },
    {
      name: 'user_info',
      path: '/user/:name',
      components: {
        main: UserInfo
      }
    }
  ]
})
