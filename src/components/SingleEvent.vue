<template>
    <div class = "main">
        <div class = "container">
            <div class="row">
                <div class="col s12 content">
                    <h1 class = "event-title white-text">{{event.title}}</h1>
                    <div class = "row">
                        <div class = "col s12">
                            <p class = "left-align white-text"><i class="far fa-calendar" aria-hidden="true"></i> {{event.date}} </p>
                        </div>
                    </div>
                    
                    <div class="row" v-for="i in Math.ceil(event.images.length / 3)" :key="i">
                        <div class = "col s12 m4" v-for="(image,index) in event.images.slice((i - 1) * 3, i * 3)" :key="index">
                            <div class="card blue-grey darken-4">
                            <div class="card-image">
                                <img v-img:group :src="image.image"> 
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
.event-title{
  font-family: 'abel';
}
.content{
    padding-top: 50px;
    padding-bottom:50px;
}
.buttons{
    margin-top:25px;
}

.main{
    background-color: #110909;
}
</style>

<script>
import {eventsRef} from '../firebase';

export default{
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
        this.event.images.forEach(function(image){
            console.log(image.image)
        })
        
    },
    computed: {
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