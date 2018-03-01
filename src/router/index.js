import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import firebase from '../firebase'

import SingleBlog from '@/components/SingleBlog'
import SingleEvent from '@/components/SingleEvent'
import LandingPage from '@/components/LandingPage'
import ListOfBlogPosts from '@/components/ListOfBlogPosts'
import EventsPage from '@/components/EventsPage'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Media from '@/components/Media'
import Contact from '@/components/Contact'

// admin pages
import HomePage from '@/components/admin/HomePage'
import AdminHeader from '@/components/admin/AdminHeader'
import Login from '@/components/admin/Login'
import NewBlog from '@/components/admin/NewBlog'
import ViewBlogs from '@/components/admin/ViewBlogs'
import ViewEvents from '@/components/admin/ViewEvents'
import NewEvent from '@/components/admin/NewEvent'
import EditBlog from '@/components/admin/EditBlog'
import EditEvent from '@/components/admin/EditEvent'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/blog/:id',
      component: SingleBlog,
      meta: { auth: false },
    },
    {
      path: '/event/:id',
      component: SingleEvent,
      meta: { auth: false },
    },

    {
      path: '/',
      component: LandingPage,
      meta: { auth: false },
    },
    {
      path: '/ListOfBlogPosts',
      component: ListOfBlogPosts,
      meta: { auth: false },
    },
    {
      path: '/EventsPage',
      component: EventsPage,
      meta: { auth: false },
    },
    {
      path: '/About',
      component: About,
      meta: { auth: false },
    },
    {
      path: '/Media',
      component: Media,
      meta: { auth: false },
    },
    {
      path: '/Contact',
      component: Contact,
      meta: { auth: false },
    },

    //admin pages
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: { auth: false },
    },
    {
      path: '/AdminHeader',
      name: 'AdminHeader',
      component: AdminHeader,
      meta: { auth: true },
    },
    {
      path: '/admin/HomePage',
      name: 'HomePage',
      component: HomePage,
      meta: { auth: true },
    },
    {
      path: '/admin/NewBlog',
      name: 'NewBlog',
      component: NewBlog,
      meta: { auth: true },
    },
    {
      path: '/admin/ViewBlogs',
      component: ViewBlogs,
      meta: { auth: true },
    },
    {
      path: '/admin/ViewEvents',
      component: ViewEvents,
      meta: { auth: true },
    },
    {
      path: '/admin/NewEvent',
      component: NewEvent,
      meta: { auth: true },
    },
    {
      path: '/admin/EditBlog/:id',
      component: EditBlog,
      meta: { auth: true },
    },
    {
      path: '/admin/EditEvent/:id',
      component: EditEvent,
      meta: { auth: true },
    },
    
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth){
        firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log('User is logged in.');
          next()
        } else {
          console.log('User is not logged in.');
          next({
            name: 'Login'
          })
        }
    });
  }else{
    // no auth needed for this page, go ahead and access it
    next()
  }
})


export default router