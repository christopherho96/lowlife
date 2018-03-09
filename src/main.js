// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebase from './firebase'
import VueFire from 'vuefire';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import SocialSharing from 'vue-social-sharing'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueImg from 'v-img';
import VueSwal from 'vue-swal'

Vue.config.productionTip = false
Vue.use(SocialSharing);
Vue.use(VueFire);
Vue.use(VueYouTubeEmbed);
Vue.use(VueMaterial)
Vue.use(VueImg);
Vue.use(VueSwal)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',

})
