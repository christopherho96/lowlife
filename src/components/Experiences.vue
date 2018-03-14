<template>
    <div>
            <div class = "events-list">
                <div class = "container">
                    <div class="row" v-for="(event,index) in sortedFromMostRecentPosts" :key="index">
                        <div class="col s12 m12">
                          <router-link v-bind:to= "'/event/' + event['.key']">
                            <div class="card blue-grey darken-4 event-card" v-bind:style="{ backgroundImage: 'url('+ event.images[0].image + ')' }">
                              <div class = "dim">
                                  <div class="card-content white-text" style ="position:absolute; bottom:0;">
                                    <p class = "event-title">{{event.title}}</p>
                                    <p><i class="far fa-calendar" aria-hidden="true"></i> {{event.date}}</p>
                                    <p>{{event.location}}</p>                                  
                                  </div>
                              </div>
                            </div>
                          </router-link>
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
  font-family: 'Abel';
  font-size: 20px;
  margin-bottom: 5px !important;
}

.event-card :hover{
  background: rgba(0, 0, 0, 0);
}
.events-list{
    padding-top:100px;
    padding-bottom:50px;
    background-color: #110909;
}
.brand-text{
    font-family: 'Lato', sans-serif;
    font-weight: 200;
    font-size: 120px;
}

h4{
  margin-top: 0 !important;
  font-family: 'Knockout';
}

.logo{
  margin-top:50px;
}

.showcase{
  background: url(../assets/dj.jpg);
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

.dim{
    background: rgba(0, 0, 0, 0.2);
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
import header from './Header.vue';
import {eventsRef} from '../firebase';
import firebase from 'firebase';
export default {
  components: {
    'app-header': header
  },
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
