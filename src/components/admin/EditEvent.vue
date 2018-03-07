<template>
  <div class = "container">
    <h2>Edit Event Post</h2>
    <form v-if = "!event.submitted">
        <label>Blog Title:</label>
        <input type ="text"  v-model.lazy= "event.title" required/>
        <label>Date</label>
        <input type ="text"  v-model.lazy= "event.date" required/>
        <label>Images</label>
        <div class="row" v-for="i in Math.ceil(event.images.length / 3)" :key="i">
            <div class = "col s12 m4" v-for="(image,index) in event.images.slice((i - 1) * 3, i * 3)" :key="index">
                <div class="card blue-grey darken-4">
                <div class="card-image">
                    <img v-img:group :src="image.image">
                    <button v-on:click="remove(index)" class = "btn">X</button> 
                </div>
                </div>
            </div>
        </div>
        <label for="">Image URL</label>
        <input type ="text"  v-model= "imageURL" required/>
        <button v-on:click="addItem" class = "btn" style = "margin-bottom:50px">Save Image URL</button>
    </form>

    <button v-on:click.prevent= "post" class = "btn btn-primary" style="margin-bottom:50px">Publish</button>          
  </div>
</template>

<script>
import {eventsRef} from '../../firebase'
export default {

  data () {
    return {
        id: this.$route.params.id,
        event: {},
    }
  },

    firebase:{
        eventPosts: eventsRef
    },
    created(){
        console.log(this.$route.fullPath)
        let eventPostID = this.id;
        let thisEvent;
        this.eventPosts.forEach(function(eventPost) {
            if (eventPost['.key'] === eventPostID) {
                    thisEvent = eventPost
            }
        });
        this.event = thisEvent;
    },
    methods: {
        post: function(){
            eventsRef.child(this.id).set({
                date: this.event.date,
                images: this.event.images,
                title: this.event.title
            })
            alert(`Your event post has been updated.`);
            this.$router.push('/admin/ViewEvents');
        },
        addItem(){
            this.event.images.push({image: this.imageURL})
            this.imageURL = ''
        },
        remove(index){
            this.event.images.splice(index, 1)
        }
    }
}
</script>

<style>


label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}

textarea{
    white-space: pre-wrap;
}
</style>