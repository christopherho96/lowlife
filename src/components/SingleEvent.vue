<template>
    <div class = "container">
        <div class="row">
            <div class="col m9 l10 s12 content">
                <h1 class = "event-title">{{event.title}}</h1>
                <div class = "row">
                    <div class = "col s12">
                        <p class = "left-align">{{event.date}} </p>
                    </div>
                </div>
                <img :src="event.imageURL" width="100%" style="padding-bottom:25px;">
                <article style="white-space: pre-wrap;">{{event.content}}</article>
                <social-sharing :url="this.$route.fullPath" inline-template>
                    <div class = "row buttons">
                        <network network="facebook" class="btn btn-primary blue darken-4">
                        <i class="fab fa-facebook"></i> Facebook
                        </network>
                        <network network="twitter" class="btn btn-primary blue">
                        <i class="fab fa-twitter"></i> Twitter
                        </network>
                    </div>  
                </social-sharing>
            </div>
            <div class="col hide-on-small-only m3 l2 s12">
                <ul class="pinned section table-of-contents">
                <h5>MORE EVENTS</h5>
                <li v-for="(event,index) in events" :key="index">
                    <div v-if="event['.key'] != id" class = "row">
                        <a v-on:click = "loadNewEventPost(event['.key'])">{{event.title}}</a>
                    </div>
                </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.event-title{
  font-family: 'Roboto Mono', sans-serif;
}
.content{
    padding-bottom:50px;
}
.buttons{
    margin-top:25px;
}
</style>

<script>
import {eventsRef} from '../firebase'
export default{
    props: ['index'],
    data(){
        return{
            id: this.$route.params.id,
            event: {},
        }
    },

    firebase:{
        events: eventsRef
    },
    created(){
        let eventPostID = this.id;
        let thisEvent;
        this.events.forEach(function(eventPost) {
            if (eventPost['.key'] === eventPostID) {
                 thisEvent = eventPost
            }
        });
        this.event = thisEvent;
        
    },
    methods: {
        loadNewEventPost(key){
            var route = '/event/' + key
            this.id = key
            let eventPostID = key;
            let thisEvent;
            this.events.forEach(function(eventPost) {
                if (eventPost['.key'] === eventPostID) {
                    thisEvent = eventPost
                }
            });
            this.event = thisEvent;
        },
    }
}
</script>