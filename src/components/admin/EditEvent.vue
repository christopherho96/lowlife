<template>
  <div id="add-blog">
    <h2>Add a New Event Post</h2>
    <form v-if = "!event.submitted">
        <label>Blog Title:</label>
        <input type ="text"  v-model.lazy= "event.title" required/>
        <label>Date</label>
        <input type ="text"  v-model.lazy= "event.date" required/>
        <label for="">Event Content</label>
        <textarea v-model.lazy="event.content"></textarea>
        <label for="">Image URL</label>
        <input type ="text"  v-model.lazy= "event.imageURL" required/>
    </form>

    <div v-if = "event.submitted">
        <p>You have submitted your post</p>
    </div>
    <div id = "preview">
        <h3>Preview Blog</h3>
        <p>Event Title: {{event.title}}</p>
        <p>Event Content:</p>
        <p style= "white-space: pre-wrap;">{{event.content}}</p>
        <button v-on:click.prevent= "post" class = "btn btn-primary">Publish</button>
    </div>            
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
                content: this.event.content,
                author: this.event.author,
                date: this.event.date,
                imageURL: this.event.imageURL,
                title: this.event.title
            })
            alert(`Your event post has been updated.`);
            this.$router.push('/admin/ViewEvents');
        }
    }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
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