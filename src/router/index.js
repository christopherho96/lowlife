import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import firebase from '../firebase'

import SingleEvent from '@/components/SingleEvent'
import LandingPage from '@/components/LandingPage'
import Gallery from '@/components/Gallery'
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
import ViewGallery from '@/components/admin/ViewGallery'
import ViewEvents from '@/components/admin/ViewEvents'
import NewEvent from '@/components/admin/NewEvent'
import AddPhotos from '@/components/admin/AddPhotos'
import EditEvent from '@/components/admin/EditEvent'

Vue.use(Router)

const router = new Router({
  routes: [

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
      path: '/Gallery',
      component: Gallery,
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
      path: '/admin/ViewGallery',
      component: ViewGallery,
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
      path: '/admin/AddPhotos',
      component: AddPhotos,
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