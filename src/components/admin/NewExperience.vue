<template>
  <div class ="container">
    <h2>Add a New Experience</h2>
    <form v-if = "!event.submitted">
        <label>Experience Title</label>
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
        <button v-on:click="addItem" class = "btn" style = "margin-bottom: 50px">Save Image URL</button>
    </form>

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
            images: [],
        },
    }
  },
  methods: {
    post: function(){
        eventsRef.push(this.event)
        alert(`Your new experience has been published`);
        this.$router.push('/admin/AdminExperiences');
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

<style scoped>
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
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
