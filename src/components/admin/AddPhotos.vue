<template>
    <div class="container">
        <h2>Add New Images</h2>
        <form>
            <label for="">Image URL</label>
            <input type ="text"  v-model= "image.url" required/>
            <button v-on:click="addImage" class = "btn" style = "margin-bottom: 50px">Save Image</button>
        <label>Images</label>
        <div class="row" v-for="i in Math.ceil(images.length / 3)" :key="i">
            <div class = "col s12 m4" v-for="(image,index) in sortedFromMostRecentPosts.slice((i - 1) * 3, i * 3)" :key="index">
                <div class="card blue-grey darken-4">
                    <div class="card-image">
                        <img v-img:group :src="image.url">
                    </div>
                </div>
            </div>
        </div>
        </form>
        <button v-on:click.prevent= "post" class = "btn btn-primary">Publish</button>
    </div>
</template>

<script>
import {galleryRef} from '../../firebase'
export default {

  data () {
    return {
        id: this.$route.params.id,
        galleryID : '',
        image: {
            url: ''
        },
        images: [],
        }
    },
    firebase:{
        gallery: galleryRef
    },
    
    computed: {
      sortedFromMostRecentPosts: function() {
        return this.images.slice().reverse() 
      }
    },

    methods: {
    post: function(){
        if (this.images.length < 1){
            this.$swal("No Images", "Please fill out all fields and save image.", {
                closeOnClickOutside: false 
            })
        }else{
            this.images.forEach(function(image) {
                galleryRef.push(image)
            });
            this.$swal("Success", "Your images have been publised." , "success", {
                closeOnClickOutside: false 
            }).then((value) => {
                if (value == true){
                    this.$router.push('/admin/AdminGallery');
                }
            });
        }
    },
    addImage(){
        if (this.image.url == ""){
            this.$swal("Missing Fields", "Please fill out all details", {
                closeOnClickOutside: false 
            })
        } else {
            let newImage = {
                url: this.image.url
            }
            this.images.push(newImage)
        }
    },
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