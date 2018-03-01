<template>
  <div>
      <div class="showcase valign-wrapper">
        <div class = "primary-overlay">
          <div class="row">
            <div class="col s12 m10 offset-m1 center">
              <h3 class = "center"><span class="brand-text">LOWLIFE</span>Blog</h3>
            </div>
          </div>
        </div>
      </div>
      <div class = "blogs-list grey lighten-4">"
        <div class = "container">
          <!-- <input type= "text" v-model="search" placeholder = "Search blogs"/> -->
          <div class="row" v-for="i in Math.ceil(blogPosts.length / 3)" :key="i">
            <div class = "col s12 m4" v-for="(blogPost,index) in sortedFromMostRecentPosts.slice((i - 1) * 3, i * 3)" :key="index">
              <div class="card blue-grey darken-4">
                <div class="card-image">
                  <img :src="blogPost.imageURL">
                </div>
                <div class="card-content white-text">
                  <p class="blog-title">{{blogPost.title}}</p>
                  <br>
                  <p>{{blogPost.date}}</p>
                  <br>
                  <p>{{blogPost.content.slice(0,75)}}...</p>
                </div>
                <div class="card-action">
                  <router-link v-bind:to= "'/blog/' + blogPost['.key']">Read More</router-link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
  </div>
</template>

<style scoped>
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
import {blogPostsRef} from '../firebase';
import firebase from 'firebase';
import moment from 'moment'
export default {
  components: {
    sortedBlogs: []
  },
  data () {
    return {
    }
  },
  computed: {
      sortedFromMostRecentPosts: function() {
        return this.blogPosts.slice().reverse() 
      }
  },

  firebase:{
    blogPosts: blogPostsRef
  },
  methods:{
  },

}
</script>
