<template>
    <div class="container">
        <h2>Add Media</h2>
        <form>
            <label>Media Type</label>
            <p>
            <input v-model= "mediaItem.type" type="radio" id="male" value = "video">
            <label for="male">Youtube Video</label>
            </p>
            <p>
            <input v-model= "mediaItem.type" type="radio" id="female" value = "podcast">
            <label for="female">SoundCloud Podcast</label>
            </p>
            <br>
            <label for="">Media Embed URL</label>
            <input type ="text"  v-model= "mediaItem.url"/>
            <div class = "video-container">
                <iframe :src="mediaItem.url" frameborder="0" allowfullscreen></iframe>
            </div>
            <br>
        </form>
        <button v-on:click.prevent= "post" class = "btn btn-primary">Publish</button>
    </div>
</template>

<script>
import {mediaRef} from '../../firebase'
export default {

  data () {
    return {
        id: this.$route.params.id,
        galleryID : '',
        mediaItem: {
            url: '',
            type: '',
        },
        }
    },
    firebase:{
        media: mediaRef
    },


    methods: {
    post: function(){
        if (this.mediaItem.url == "" || this.mediaItem.type ==""){
            this.$swal("Missing Fields", "Please fill out all fields.", {
                closeOnClickOutside: false 
            })
        }else{
            mediaRef.push(this.mediaItem)
            this.$swal("Success", "Your media have been publised." , "success", {
                closeOnClickOutside: false 
            }).then((value) => {
                if (value == true){
                    this.$router.push('/admin/AdminMedia');
                }
            });
        }
    },
  }
}
</script>

<style scoped>

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