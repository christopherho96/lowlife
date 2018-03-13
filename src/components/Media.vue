<template>
    <div>
        <div class="showcase valign-wrapper">
            <div class = "primary-overlay">
                <div class="row">
                    <div class="col s12 m10 offset-m1 center">
                      <img src="../assets/PNG/white/lowlife-white-word.png" alt="" class="responsive-img logo">
                      <h4 class = "center">Media</h4>
                    </div>
                </div>
            </div>
        </div>
  <!-- Section: Videos and Podcasts -->
  <section class="section grey lighten-3">
    <div class="row">
      <div class="container">
        <div class="col s12 m8 videos">
          <ul class="collection with-header">
            <li class="collection-header white-text">
              <h5>Latest Episodes</h5>
              <p>Check out the official Lowlife YouTube channel</p>
              <a href="https://www.youtube.com/channel/UC0nghJHyf66VndaqSBflETg" target = "_blank"  class="btn btn-primary red darken-3 button"><i class="fab fa-youtube"></i> Youtube</a>
            </li>
            <li class="collection-item" v-for="(media,index) in sortedVideos" :key="index" v-if="media.type == 'video'">
              <div v-if="media.type = 'video'" class = "video-container">
                <iframe width="560" height="315" :src="media.url" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>
            </li>
          </ul>
        </div>
        <div class="col s12 m4">
          <!-- Podcasts -->
          <ul class="collection with-header">
            <li class="collection-header white-text">
              <h5>Podcasts</h5>
              <p>Official Lowlife SoundCloud Channel</p>
              <a href= "https://soundcloud.com/lowlife-media" target = "_blank"  class="btn btn-primary orange darken-3 button"><i class="fab fa-soundcloud"></i> SoundCloud</a>
            </li>
            <li class="collection-item" v-for="(media,index) in sortedPodcasts" :key="index" v-if="media.type == 'podcast'">
                <div class = "video-container">
                  <iframe width="100%" height="300" scrolling="no" frameborder="no" :src="media.url"></iframe>
                </div>
            </li>
          </ul>
        </div>
      </div>  
    </div>
  </section>

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

.collection-header{
   background-color:#10002E !important;
}

.video-container {
    position: relative;
}
.video-container iframe,
.video-container object {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
a{
  margin-top: 10px;
  margin-bottom: 10px;
}
.events-list{
    padding-top:50px;
    padding-bottom:50px;
}
.brand-text{
    font-family: 'Lato', sans-serif;
    font-weight: 200;
    font-size: 120px;
}

h3{
  padding-top: 50px;
}

h5{
  font-family: 'Knockout';
}

.showcase{
  background: url(../assets/media2.jpg);
  background-size: cover;
  background-position: center;
  min-height: 250px;
  color: #fff;
  position:relative;
}

.primary-overlay{
  background: rgba(0, 0, 0, 0.5);
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
import {mediaRef} from '../firebase';
import firebase from 'firebase';
import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed';
export default {
  components: {
  },
  data () {
    return {
    }
  },
  
  computed: {
      sortedVideos(){
        const videos = []
        this.media.forEach(function(element) {
          if (element.type == "video") {
            videos.push(element)
          }
        });
        return videos.slice().reverse()
      },

      sortedPodcasts(){
        const podcasts = []
        this.media.forEach(function(element) {
        if (element.type == "podcast") {
          podcasts.push(element)
        }
        });
        return podcasts.slice().reverse()
      }
    },

  firebase:{
    media: mediaRef
  },
  methods: {
    getVideo(url) {
      return this.$youtube.getIdFromURL(url)
    }
  }
}
</script>