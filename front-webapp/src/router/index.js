import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Blog from '../components/Blog'
import BlogHome from '../components/BlogHome'
import BlogBlog from '../components/BlogBlog'
import BlogRead from '../components/BlogRead'
import BlogLife from '../components/BlogLife'
import BlogCenter from '../components/BlogCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/blog',
      component: Blog,

      children: [
        {
          path: '/',
          component: BlogHome
        },
        {
          path: 'home',
          component: BlogHome
        },
        {
          path: 'blog',
          component: BlogBlog
        },
        {
          path: 'read',
          component: BlogRead
        },
        {
          path: 'life',
          component: BlogLife
        },
        {
          path: 'center',
          component: BlogCenter
        }
      ]
    }
  ]
})
