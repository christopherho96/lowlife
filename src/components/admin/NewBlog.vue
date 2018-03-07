<template>
    <div class="container">
        <h2>Add New Photos</h2>
        <form>
        <label>Images</label>
        <div class="row" v-for="i in Math.ceil(images.length / 3)" :key="i">
            <div class = "col s12 m4" v-for="(image,index) in images.slice((i - 1) * 3, i * 3)" :key="index">
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
        <button v-on:click="addImage" class = "btn" style = "margin-bottom: 50px">Save Image URL</button>
        </form>

        <button v-on:click.prevent= "post" class = "btn btn-primary">Publish</button>
    </div>
</template>

<script>
import {galleryRef} from '../../firebase'
import moment from 'moment';
export default {

  data () {
    return {
        images: [],
    }
  },
  methods: {
    post: function(){
        galleryRef.push({images: this.images})
        alert(`Your photos have been published`);
        this.$router.go(-1);
    },
    addImage(){
      this.images.push({image: this.imageURL})
      this.imageURL = ''
    }
  }
}
</script>

<style scoped>

.container{
    margin-top: 50px;
    margin-bottom: 50px;
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
