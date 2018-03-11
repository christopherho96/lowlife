import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import firebase from '../firebase'

import SingleEvent from '@/components/SingleEvent'
import LandingPage from '@/components/LandingPage'
import Gallery from '@/components/Gallery'
import Experiences from '@/components/Experiences'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Merchandise from '@/components/Merchandise'
import Media from '@/components/Media'
import Contact from '@/components/Contact'

// admin pages
import HomePage from '@/components/admin/HomePage'
import AdminHeader from '@/components/admin/AdminHeader'
import Login from '@/components/admin/Login'
import NewBlog from '@/components/admin/NewBlog'
import AdminGallery from '@/components/admin/AdminGallery'
import AdminExperiences from '@/components/admin/AdminExperiences'
import NewExperience from '@/components/admin/NewExperience'
import AddPhotos from '@/components/admin/AddPhotos'
import EditEvent from '@/components/admin/EditEvent'
import EditMerchItem from '@/components/admin/EditMerchItem'
import AdminMerch from '@/components/admin/AdminMerch'
import AdminAddMerch from '@/components/admin/AdminAddMerch'
import AdminMedia from '@/components/admin/AdminMedia'
import AdminAddMedia from '@/components/admin/AdminAddMedia'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: LandingPage,
      meta: { auth: false },
    },
    {
      path: '/event/:id',
      component: SingleEvent,
      meta: { auth: false },
    },

    {
      path: '/Merchandise',
      component: Merchandise,
      meta: { auth: false },
    },
    {
      path: '/Gallery',
      component: Gallery,
      meta: { auth: false },
    },
    {
      path: '/Experiences',
      component: Experiences,
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
      path: '/admin/AdminGallery',
      component: AdminGallery,
      meta: { auth: true },
    },
    {
      path: '/admin/AdminExperiences',
      component: AdminExperiences,
      meta: { auth: true },
    },
    {
      path: '/admin/NewExperience',
      component: NewExperience,
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
    {
      path: '/admin/AdminMerch',
      component: AdminMerch,
      meta: { auth: true },
    },
    {
      path: '/admin/AddMerch',
      component: AdminAddMerch,
      meta: { auth: true },
    },
    {
      path: '/admin/EditMerchItem/:id',
      component: EditMerchItem,
      meta: { auth: true },
    },
    {
      path: '/admin/AdminMedia',
      component: AdminMedia,
      meta: { auth: true },
    },
    {
      path: '/admin/AdminAddMedia',
      component: AdminAddMedia,
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