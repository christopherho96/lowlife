<template>
    <div>
        <div class = "navbar-fixed">
            <nav>
                <div class = "container">
                    <div class="nav-wrapper">
                        <router-link class="brand-logo" to="/admin/HomePage"><img src="../../assets/PNG/white/lowlife-white2.png"/></router-link>
                        <a @click="showNavigation = true" data-activates="mobile-nav" class="button-collapse">                                
                            <i class ="material-icons">menu</i>
                        </a>
                        <ul class="right hide-on-med-and-down">
                            <li>
                                <router-link to= "/admin/HomePage">Admin Home</router-link>
                            </li>
                            <li>
                                <router-link to= "/admin/AdminExperiences">Experiences</router-link>
                            </li>
                            <li>
                                <router-link to= "/admin/AdminGallery">Gallery</router-link>
                            </li>
                            <li>
                                <router-link to= "/admin/AdminMedia">Media</router-link>
                            </li>
                            <li>
                                <router-link to= "/admin/AdminMerch">Merchandise</router-link>
                            </li>
                            <li>
                                <button v-on:click="signOut()"class="btn yellow darken-3 black-text">Sign Out</button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <md-drawer :md-active.sync="showNavigation">
            <md-list>
                <!--SPACER-->

                <md-list-item>
                <span class="md-list-item-text"></span>
                </md-list-item>
                <!--SPACER-->

                <md-list-item>
                <md-icon>home</md-icon>
                <span class="md-list-item-text">
                    <router-link class="link" to= "/admin/HomePage">Admin Home</router-link>
                </span>
                </md-list-item>

                <md-list-item>
                <md-icon>event</md-icon>
                <span class="md-list-item-text"><router-link class="link" to= "/admin/AdminExperiences">Experiences</router-link>
                </span>
                </md-list-item>

                <md-list-item>
                <md-icon>photo</md-icon>
                <span class="md-list-item-text"><router-link class="link" to= "/admin/AdminGallery">Gallery</router-link>
                </span>
                </md-list-item>

                <md-list-item>
                <md-icon>movie</md-icon>
                <span class="md-list-item-text"><router-link class="link" to= "/admin/AdminMedia">Media</router-link>
                </span>
                </md-list-item>

                <md-list-item>
                <md-icon>shop</md-icon>
                <span class="md-list-item-text"><router-link class="link" to= "/admin/AdminMerch">Merchandise</router-link>
                </router-link>
                </span>
                </md-list-item>

                <md-list-item>
                <button v-on:click="signOut()"class="btn yellow darken-3 black-text">Sign Out</button>
                </router-link>
                </span>
                </md-list-item>

            </md-list>
        </md-drawer>
    </div>
</template>

<script>

import firebase from 'firebase';
import store from '../../store';
export default {
    name: 'Temporary',
    data: () => ({
      showNavigation: false,
    }),


  methods:{
    signOut(){
      firebase.auth().signOut().then(
        user => {
          store.dispatch('setLogInState', false)
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
    font-family: 'Knockout', sans-serif;  
}

.md-drawer {
    background-color:white;
}

.md-drawer .link{
    color:#10002E !important;
}

nav{
    background-color:#10002E !important;
}

.brand-logo{
    width: 125px;
}
</style>