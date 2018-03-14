<template>
  <div>
      <div class="showcase valign-wrapper">
        <p class= "center title" style="width: 100%">Gallery</p>
        <div class = "primary-overlay">
        </div>
      </div>
      <div class = "blogs-list">
        <div class = "container">
          <div class="row" v-for="i in Math.ceil(gallery.length / 4)" :key="i">
            <div class = "col s12 m3" v-for="(image,index) in sortedFromMostRecentPosts.slice((i - 1) * 4, i * 4)" :key="index">
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
.title{
  font-family: 'Abel';
  font-size: 96px;
  z-index: 999;
  text-transform: uppercase;
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
  background-color: #110909
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
  background: url(../assets/gallery.jpg);
  background-size: cover;
  background-position: center;
  height: 40vh;
  color: #fff;
  position:relative;
}

.primary-overlay{
  background: rgba(0, 0, 0, 0.3);
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
