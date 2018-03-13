<template>
  <div id="app">
    <app-admin-header v-if="this.$store.getters.checkLogInState && this.$router.history.current.path != '/'"></app-admin-header>
    <app-header v-if="!this.$store.getters.checkLogInState && this.$router.history.current.path != '/' "></app-header>
    <router-view/>
    <app-footer v-if="this.$router.history.current.path != '/'"></app-footer>
  </div>
</template>

<script>
import AdminHeader from './components/admin/AdminHeader.vue';
import header from './components/Header.vue';
import footer from './components/Footer.vue';
import firebase from 'firebase'
import store from './store'

export default {
    components: {
      'app-header': header,
      'app-footer': footer,
      'app-admin-header': AdminHeader
    },
    created(){
        firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log('User is logged in.');
          store.dispatch('setLogInState', true)
        } else {
          console.log('User is not logged in.');
        }
    });
      console.log("store: " + this.$store.getters.checkLogInState)
    }

}
</script>

<style>
.row{
  margin-bottom: 0 !important;
}

@font-face {
  font-family: "Knockout";
  src: url('../static/Knockout.otf');
}
</style>
