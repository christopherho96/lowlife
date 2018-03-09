<template>
    <div>
        <div class="showcase valign-wrapper">
            <div class = "primary-overlay">
                <div class="row">
                    <div class="col s12 m10 offset-m1 center">
                    <h3 class = "center"><span class="brand-text">LOWLIFE</span>Experiences</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class = "events-list grey lighten-4">
            <div class = "container">
                <div class = "row center">
                    <router-link v-bind:to= "'/admin/NewExperience'" class="btn-large">New Experience</router-link>
                </div>
                <div class="row" v-for="(event,index) in sortedFromMostRecentPosts" :key="index">
                    <div class="col s12 m12">
                      <div class="card blue-grey darken-4 event-card" v-bind:style="{ backgroundImage: 'url('+ event.images[0].image + ')' }">
                        <div class = "primary-overlay">
                            <div class="card-content white-text" style ="position:absolute; bottom:0;">
                              <p class = "event-title">{{event.title}}</p>
                              <p><i class="far fa-calendar" aria-hidden="true"></i> {{event.date}}</p>
                              <p>{{event.location}}</p>
                              <router-link v-bind:to= "'/admin/EditEvent/' + event['.key']" class = "btn btn-primary green black-text">Edit</router-link>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.event-card{
  background-size: cover;
  background-position: center;
  min-height: 250px;
  color: #fff;
  position:relative;
}

.event-title{
  font-family: 'Roboto Mono', sans-serif;
  font-size: 20px;
  margin-bottom: 5px !important;
}

.event-card :hover{
  background: rgba(0, 0, 0, 0.2);
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

.showcase{
  background: url(../../assets/dj.jpg);
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
import {eventsRef} from '../../firebase';
import firebase from 'firebase';
export default {

  data () {
    return {
    }
  },

  firebase:{
    events: eventsRef
  },

  computed: {
    sortedFromMostRecentPosts: function() {
        return this.events.slice().reverse() 
    }
  },
  methods:{
  }
}
</script>