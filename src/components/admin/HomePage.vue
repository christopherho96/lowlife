<template>
  <div class = "container">
      <h2 class = "center">Edit the notifcation on the landing page</h2>
      <form >
        <label>Update Title:</label>
        <input type ="text"  v-model="update.title" required/>
        <label>Message</label>
        
        <textarea v-model= "update.message" class = "materialize-textarea" placeholder="Enter Message" required></textarea>
        
        <label>Media Type</label>
        <p>
          <input v-model= "update.mediaType" type="radio" id="male" value = "image">
          <label for="male">Image</label>
        </p>
        <p>
          <input v-model= "update.mediaType" type="radio" id="female" value = "video">
          <label for="female">Video</label>
        </p>
        <br>
        <label>Media URL</label>
        <input type ="text"  v-model="update.mediaURL" required/>

        <button v-on:click="post" class = "btn" style = "margin-bottom:50px">Update Notification</button>
    </form>
  </div>
</template>

<script>
import {homePageNotifsRef} from '../../firebase';
import firebase from 'firebase';
import store from '../../store';
import moment from 'moment'
export default {
  data () {
    return {
      update:{
        title: '',
        message: '',
        mediaURL: '',
        mediaType: '',
        date: moment().format("MMM Do YYYY")
      }
    }
  },
  firebase: {
    homePageNotifs : homePageNotifsRef
  },
  methods: {
    post: function() {
      if (this.update.title == "" || this.update.message == "" || this.update.mediaURL == "" || this.update.mediaType == ""){
          this.$swal("Missing Fields", "Please fill out all details", {
              closeOnClickOutside: false 
          })
      } else {
          homePageNotifsRef.push(this.update)
          this.$swal("Updated", "Your item has been updated." , "success", {
              closeOnClickOutside: false 
          }).then((value) => {
              if (value == true){
                  this.$router.push('/admin/HomePage');
              }
          });
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notice-board{
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 50px;
    padding: 30px 50px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.6);
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
body {
  font-family: 'Lato', sans-serif;
}
li{
  color:white;
}
  .container{
    max-width: 100%;
    height: 100vh;
  }

  .brand-text{
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    font-size: 100px;
    color: white;
    background-color: black;
    text-align: center;
  }

.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

article{
  white-space: pre-wrap;
}

</style>
