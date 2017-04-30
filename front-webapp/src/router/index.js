import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Blog from '../components/Blog'
import BlogHome from '../components/BlogHome'
import BlogBlog from '../components/BlogBlog'
import BlogRead from '../components/BlogRead'
import BlogLife from '../components/BlogLife'
import BlogCenter from '../components/BlogCenter'
import NotFind from '../components/NotFind'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{ 
			// 未成功匹配路由时，显示404页面
			path: '*', 
			component: NotFind
		},
		{
			path: '/',
			redirect: '/hcxowe'
		},
		{
			path: '/:username',
			component: Home
		},
		{
			path: '/:username/blog',
			component: Blog,

			children: [
				{
					path: '',
					redirect: 'home'
				},
				{
					path: 'home',
					name: 'blogHome',
					component: BlogHome
				},
				{
					path: 'article',
					name: 'blogArticle',
					component: BlogBlog
				},
				{
					path: 'read',
					name: 'blogRead',
					component: BlogRead
				},
				{
					path: 'life',
					name: 'blogLife',
					component: BlogLife
				},
				{
					path: 'center',
					name: 'blogCenter',
					component: BlogCenter
				}
			]
		}
	]
})
