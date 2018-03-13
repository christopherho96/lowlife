<template>
  <div>
      <div class="showcase valign-wrapper">
        <div class = "primary-overlay">
          <div class="row">
            <div class="col s12 m10 offset-m1 center">
              <img src="../assets/PNG/white/lowlife-white-word.png" alt="" class="responsive-img logo">
              <h4 class = "center">Gallery</h4>
            </div>
          </div>
        </div>
      </div>
      <div class = "blogs-list grey lighten-4">
        <div class = "container">
          <div class="row" v-for="i in Math.ceil(gallery.length / 3)" :key="i">
            <div class = "col s12 m4" v-for="(image,index) in sortedFromMostRecentPosts.slice((i - 1) * 3, i * 3)" :key="index">
                <div class="card blue-grey darken-4">
                  <div class="card-image">
                    <img v-img:group :src="image.url"> 
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>
h4{
  margin-top: 0 !important;
  font-family: 'Knockout';
}

.logo{
  margin-top:50px;
}
.blog-title{
  font-family: 'Roboto Mono', sans-serif;
  font-size: 20px;
}
.blogs-list{
  padding-top: 30px;
  padding-bottom:30px;
}
.brand-text{
    font-family: 'Lato', sans-serif;
    font-weight: 200;
    font-size: 120px;
}

h3{
  padding-top: 50px;
}

.showcase{
  background: url(../assets/blog.jpg);
  background-size: cover;
  background-position: center;
  min-height: 250px;
  color: #fff;
  position:relative;
}

.primary-overlay{
  background: rgba(0, 0, 0, 0.6);
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

@media(max-width: 700px){
  .brand-text{
    font-size: 60px;
  }
  .showcase{
    min-height: 200px;
  }
}

</style>

<script>
import {galleryRef} from '../firebase';
import firebase from 'firebase';
export default {

  computed: {
      sortedFromMostRecentPosts: function() {
        return this.gallery.slice().reverse() 
      }
  },

  firebase:{
    gallery: galleryRef
  },

}
</script>
