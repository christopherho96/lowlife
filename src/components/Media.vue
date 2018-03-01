<template>
    <div>
        <div class="showcase valign-wrapper">
            <div class = "primary-overlay">
                <div class="row">
                    <div class="col s12 m10 offset-m1 center">
                    <h3 class = "center"><span class="brand-text">LOWLIFE</span>Media</h3>
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
            <li class="collection-header blue-grey darken-4 white-text">
              <h5>Latest Episodes</h5>
              <p>Check out the official Lowlife YouTube channel</p>
              <a href="https://www.youtube.com/channel/UC0nghJHyf66VndaqSBflETg" target = "_blank"  class="btn btn-primary red darken-3 button"><i class="fab fa-youtube"></i> Youtube</a>
            </li>
            <li class="collection-item">
              <div class = "video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dOrf5jFWVH8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>
            </li>
            <li class="collection-item">
                <div class = "video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/TDDiZsExM0M" frameborder="0" allowfullscreen></iframe>
                </div>
            </li>
            <li class="collection-item">
                <div class = "video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/WaIHwx3sfNM" frameborder="0" allowfullscreen></iframe>
                </div> 
            </li>
          </ul>
        </div>
        <div class="col s12 m4">
          <!-- Podcasts -->
          <ul class="collection with-header">
            <li class="collection-header blue-grey darken-4 white-text">
              <h5>Podcasts</h5>
              <p>Official Lowlife SoundCloud Channel</p>
              <a href= "https://soundcloud.com/lowlife-media" target = "_blank"  class="btn btn-primary orange darken-3 button"><i class="fab fa-soundcloud"></i> SoundCloud</a>
            </li>
            <li class="collection-item">
                <div class = "video-container">
                  <iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/392725596&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>
            </li>
            <li class="collection-item">
                <div class = "video-container">
                  <iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/388095791&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>
            </li>
            <li class="collection-item">
                <div class = "video-container">
                  <iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/385830305&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
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
  font-family: 'Roboto Mono', sans-serif;
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
import {eventsRef} from '../firebase';
import firebase from 'firebase';
import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed';
export default {
  components: {
  },
  data () {
    return {
    }
  },

  firebase:{
  },
  methods: {
    getVideo(url) {
      return this.$youtube.getIdFromURL(url)
    }
  }
}
</script>