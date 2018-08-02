import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login.vue'
import Register from './views/register.vue'
import AddArticle from './views/addarticle.vue'
import Articleview from './views/articles.vue'
import Edit from './views/edit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/articles/edit/:id',
      name: 'edit',
      component: Edit
    },
    {
      path: '/articles/:id',
      name: 'articles',
      component: Articleview
    },
    {
      path: '/addpost',
      name: 'addpost',
      component: AddArticle
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import ( /* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
