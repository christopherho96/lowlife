<template>
  <div class = "container">
      <h1 class = "brand-text">LOWLIFE</h1>
      <div class = "row center">
        <router-link v-bind:to= "'/admin/ViewEvents'" class="btn-large">Events</router-link>
        <router-link v-bind:to= "'/admin/ViewGallery'" class="btn-large">Gallery</router-link>
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
