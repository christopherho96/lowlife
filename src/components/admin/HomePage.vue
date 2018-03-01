<template>
  <div class = "container">
      <h1 class = "brand-text">LOWLIFE</h1>
      <!-- <input type= "text" v-model="search" placeholder = "Search blogs"/> -->

      <div class = "row center">
        <router-link v-bind:to= "'/admin/ViewBlogs'" class="btn-large">Blogs</router-link>
        <router-link v-bind:to= "'/admin/ViewEvents'" class="btn-large">Events</router-link>
        <button v-on:click="signOut()"class="btn-large">Sign Out</button>
      </div>


  </div>
</template>

<script>
import {blogPostsRef} from '../../firebase'
import firebase from 'firebase';
import store from '../../store';
export default {
  data () {
    return {
    }
  },

  created(){
    console.log(store.getters.checkLogInState)
  },

  firebase:{
    blogPosts: blogPostsRef
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body {
  font-family: 'Lato', sans-serif;
}
li{
  color:white;
}
  .container{
    max-width: 100%;
    height: 100vh;
  }

  .brand-text{
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    font-size: 100px;
    color: white;
    background-color: black;
    text-align: center;
  }


.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

article{
  white-space: pre-wrap;
}


</style>
