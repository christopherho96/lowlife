<template>
    <div>
        <div class = "navbar-fixed">
            <nav class = "blue-grey darken-4">
                <div class = "container">
                    <div class="nav-wrapper">
                        <a href="" class="brand-logo">LOWLIFE</a>
                        <a href="" data-activates="mobile-nav" class="button-collapse">                                
                            <i class ="material-icons">menu</i>
                        </a>
                        <ul class="right hide-on-med-and-down">
                            <li>
                                <router-link to= "/admin/HomePage">Admin Home</router-link>
                            </li>
                            <li>
                                <router-link to= "/admin/ViewEvents">Events</router-link>
                            </li>
                            <li>
                                <router-link to= "/admin/ViewGallery">Gallery</router-link>
                            </li>
                            <li>
                                <button v-on:click="signOut()"class="btn yellow darken-3 black-text">Sign Out</button>
                            </li>

                        </ul>
                        <!--Side Nav -->
                        <ul class="side-nav" id ="mobile-nav">
                            <h4 class ="blue-grey darken-3 center">LOWLIFE</h4>
                            <li>
                                <a class ="divider"></a>
                            </li>
                            <li>
                                <router-link to= "/">Home</router-link>
                            </li>
                            <li>
                                <router-link to= "/EventsPage">Events</router-link>
                            </li>
                            <li>
                                <router-link to= "/ListOfBlogPosts">Blog</router-link>
                            </li>
                            <li>
                                <router-link to= "/Media">Media</router-link>
                            </li>
                            <li>
                                <router-link to= "/Gallery">Contact</router-link>
                            </li>         
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>

import firebase from 'firebase';
import store from '../../store';
export default {
  data () {
    return {
    }
  },


  methods:{
    signOut(){
      firebase.auth().signOut().then(
        user => {
          store.dispatch('setLogInState', false)
            alert(`You are logged out`);
            this.$router.push('/Login');
          },
          err => {
            alert(err.message);
          }
      )
        
    }
  }
}
</script>

<style scoped>
li{
    font-family: 'Lato', sans-serif;
    font-weight: 300;  
}
</style>