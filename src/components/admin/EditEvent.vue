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
                    <button v-on:click="deleteImage((i-1) * 3 + index)" class="btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">delete</i>
                    </button>
                </div>
                </div>
            </div>
        </div>
        <label for="">Image URL</label>
        <input type ="text"  v-model= "imageURL" required/>
        <button v-on:click="addItem" class = "btn" style = "margin-bottom:50px">Save Image URL</button>
    </form>

    <button v-on:click.prevent= "post" class = "btn btn-primary" style="margin-bottom:50px">Update</button>          
    <button class="btn red waves-effect waves-light modal-trigger" v-on:click="deleteEvent()" style="margin-bottom:50px">Delete</button>
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

            if (this.event.title == "" || this.event.images == "" || this.event.date == ""){
                this.$swal("Missing Fields", "Please fill out all details", {
                    closeOnClickOutside: false 
                })
            } else {
                eventsRef.child(this.id).set({
                    date: this.event.date,
                    images: this.event.images,
                    title: this.event.title
                })
                this.$swal("Updated", "Your experience has been updated." , "success", {
                    closeOnClickOutside: false 
                }).then((value) => {
                    if (value == true){
                        this.$router.push('/admin/AdminExperiences');
                    }
                });
            }
        },
        addItem(){
            this.event.images.push({image: this.imageURL})
            this.imageURL = ''
        },
        deleteImage(index){
            swal({
                title: "Are you sure?",
                text: "This will remove the image from this experience.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                closeOnClickOutside: false,
                })
                .then((willDelete) => {
                if (willDelete) {
                    swal("Your image was successfully removed.", {
                    icon: "success",
                    });
                    this.event.images.splice(index, 1);
                }});
        },
        deleteEvent(){
            swal({
                title: "Are you sure?",
                text: "This will remove this experience from the Experiences page",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                closeOnClickOutside: false,
                })
                .then((willDelete) => {
                if (willDelete) {
                    swal("Your experience has been deleted.", {
                    icon: "success",
                    });
                    eventsRef.child(this.id).remove();
                    this.$router.push('/admin/AdminExperiences');
                } 
                });
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