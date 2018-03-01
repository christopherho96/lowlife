<template>
  <div class ="container">
    <h2>Add a New Event Post</h2>
    <form v-if = "!event.submitted">
        <label>Event Title</label>
        <input type ="text"  v-model.lazy= "event.title" required/>
        <label>Date</label>
        <input type ="text"  v-model.lazy= "event.date" required/>
        <label>Location</label>
        <input type ="text"  v-model.lazy= "event.location" required/>
        <label for="">Event Content</label>
        <textarea v-model.lazy="event.content"></textarea>
        <label for="">Image URL</label>
        <input type ="text"  v-model.lazy= "event.imageURL" required/>
    </form>

    <div v-if = "event.submitted">
        <p>You have submitted your post</p>
    </div>
    <div id = "preview">
        <h3>Preview Event</h3>
        <p>Event Title: {{event.title}}</p>
        <p>Date: {{event.date}}</p>
        <p>Location: {{event.location}}</p>
        <p>Event Content:</p>
        <p style= "white-space: pre-wrap;">{{event.content}}</p>
    </div>
    <div class = "publish">  
        <button v-on:click.prevent= "post" class = "btn btn-primary">Publish</button>
    </div>           
  </div>
</template>

<script>
import {eventsRef} from '../../firebase'
import moment from 'moment';
export default {

  data () {
    return {
        event: {
            title: "",
            date: "",
            content: "",
            author: "",
            imageURL: "",
            location: ""
        },
    }
  },
  methods: {
    post: function(){
        eventsRef.push(this.blog)
        alert(`Your new event post has been published`);
        this.$router.push('/ViewEvents');
    }
  }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
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
.publish{
    margin-bottom: 50px;
}
</style>
