<template>
    <div>
            <div class = "left valign-wrapper">
                <div class = "container">
                <p class = "grey-text center date">{{homePageNotifs[homePageNotifs.length - 1].date}}</p>
                <h2 class = "white-text center">{{homePageNotifs[homePageNotifs.length - 1].title}}</h2>
                <!-- <article style="white-space: pre-wrap;" class = "white-text center">{{homePageNotifs[homePageNotifs.length - 1].message}}
                </article> -->
                <div v-if="homePageNotifs[homePageNotifs.length - 1].mediaType == 'video'"  class = "video-container">
                    <iframe width="560" height="315" :src="homePageNotifs[homePageNotifs.length - 1].mediaURL" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                <div v-if="homePageNotifs[homePageNotifs.length - 1].mediaType == 'image'">
                    <img :src="homePageNotifs[homePageNotifs.length - 1].mediaURL" alt="" class="responsive-img">                            
                </div>

                <div class = "row center logo">
                    <img src="../assets/PNG/white/lowlife-white-heart.png" alt="" class="responsive-img" width="50">
                </div>

                <div class = "row center icons">
                    <a href="https://www.facebook.com/Lowlife-1011391372208170/" target = "_blank" class = "white-text social-icon">
                    <i class = "fab fa-facebook fa-2x"></i>
                    </a>

                                    <a href="https://www.youtube.com/channel/UC0nghJHyf66VndaqSBflETg" target = "_blank" class = " white-text social-icon">
                    <i class = "fab fa-youtube fa-2x"></i>
                    </a>

                    <a href="https://soundcloud.com/lowlife-media" target = "_blank" class = "white-text social-icon">
                    <i class = "fab fa-soundcloud fa-2x"></i>
                    </a>
                    <a href="https://www.instagram.com/lw.lf/?hl=en" target = "_blank" class = "white-text social-icon">
                    <i class = "fab fa-instagram fa-2x"></i>
                    </a>
                </div>

                
                
                </div>
                    <!-- <div class= "col s12 main-text center">
                        <div class = "container">
                        <img src="../assets/PNG/white/lowlife-white-word.png" alt="" class="responsive-img">
                            <div>
                                <h5 class = "white-text">{{homePageNotifs[homePageNotifs.length - 1].title}}</h5>
                                <p class = "white-text">{{homePageNotifs[homePageNotifs.length - 1].date}}</p>
                                <article style="white-space: pre-wrap;" class = "white-text">{{homePageNotifs[homePageNotifs.length - 1].message}}
                                </article>
                                <div v-if="homePageNotifs[homePageNotifs.length - 1].mediaType == 'video'"  class = "video-container">
                                    <iframe width="560" height="315" :src="homePageNotifs[homePageNotifs.length - 1].mediaURL" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                </div>
                                <div v-if="homePageNotifs[homePageNotifs.length - 1].mediaType == 'image'">
                                    <img :src="homePageNotifs[homePageNotifs.length - 1].mediaURL" alt="" class="responsive-img">                            
                                </div>
                            </div>   
                        </div>
                    </div> -->

            </div>
            <!-- <div class = "col s12 m4 right">
                <div class = "block block1">
                    <div class = "col s12 m6">
                        <router-link v-bind:to= "'/Experiences'" class ="white-text">
                            <div class ="primary-overlay valign-wrapper">
                                <div class= "col s12 center">
                                    <span class ="lowlifefont">Experiences</span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class = "block block2">
                    <div class = "col s12 m6">
                        <router-link v-bind:to= "'/Gallery'" class ="white-text">
                            <div class ="primary-overlay valign-wrapper">
                                <div class= "col s12 center">
                                    <span class ="lowlifefont">Gallery</span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class = "block block3">
                    <div class = "col s12 m6">
                        <router-link v-bind:to= "'/Media'" class ="white-text">
                            <div class ="primary-overlay valign-wrapper">
                                <div class= "col s12 center">
                                    <span class ="lowlifefont">Media</span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class = "block block4">
                    <div class = "col s12 m6">
                        <router-link v-bind:to= "'/Merchandise'" class ="white-text">
                            <div class ="primary-overlay valign-wrapper">
                                <div class= "col s12 center">
                                    <span class ="lowlifefont">Merchandise</span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class = "block block5">
                    <div class = "col s12 m6">
                        <div class ="primary-overlay valign-wrapper">
                            <div class= "col s12 center">
                                <span class ="lowlifefont">Follow Us</span>
                                <div class = "row" style= "margin-top: 20px;">
                                    <a href="https://www.facebook.com/Lowlife-1011391372208170/" target = "_blank" class = "white-text">
                                    <i class = "fab fa-facebook fa-2x"></i>
                                    </a>

                                    <a href="https://www.youtube.com/channel/UC0nghJHyf66VndaqSBflETg" target = "_blank" class = "white-text">
                                    <i class = "fab fa-youtube fa-2x"></i>
                                    </a>

                                    <a href="https://soundcloud.com/lowlife-media" target = "_blank" class = "white-text">
                                    <i class = "fab fa-soundcloud fa-2x"></i>
                                    </a>
                                    <a href="https://www.instagram.com/lw.lf/?hl=en" target = "_blank" class = "white-text">
                                    <i class = "fab fa-instagram fa-2x"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->

    </div>
</template>

<style scoped>

.logo{
    margin-top:75px;
}

.icons{
    margin-top: 25px;
    margin-bottom: 50px !important;
}

.social-icon{
    margin-left: 10px;
    margin-right: 10px;
}

.date{
    font-family: "Source Code Pro";
}

.video-container {
    position: relative;
}
.video-container iframe,
.video-container object {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    height: 100%;;
}

.notice-board{
    margin-top: 20px;
    padding: 30px 50px;
    background: rgba(255, 255, 255, 0.6);
}
.block .lowlifefont{
    font-family: 'Knockout';
    font-weight:300;
    font-size: 30px;
}


.right-top .btn{
    margin-top:25px;
}

.primary-overlay{
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    overflow: hidden;
}
.primary-overlay:hover{
    background: rgba(0, 0, 0, 0.2);
}
.col{
    padding: 0 !important;
}

.left{
    /* background: url(../assets/hats.jpg); */
    background-color: #110909;
    background-size:cover;
    background-position:center;
    width: 100vw;
    color: #fff;
    position:relative;
    padding-top:100px;
}

.left h2{
    font-family: 'Abel';
    margin-top: 0 !important;
    text-transform: uppercase;
}

 
.block1{
    background: url(../assets/dj.jpg);
    background-size:cover;
    background-position:center;
    height: 20vh;
    color: #fff;
    position: relative;
}

.block2{
    background: url(../assets/blog.jpg);
    background-size:cover;
    background-position:center;
    height: 20vh;
    color: #fff;
    position: relative;
}
.block3{
    background: url(../assets/media2.jpg);
    background-size:cover;
    background-position:center;
    height: 20vh;
    color: #fff;
    position: relative;
}

.block4{
    background: url(../assets/merch.jpg);
    background-size:cover;
    background-position:center;
    height: 20vh;
    color: #fff;
    position: relative;
}

.block5{
    background: url(../assets/lowlife3.jpg);
    background-size:cover;
    background-position:center;
    height: 20vh;
    color: #fff;
    position: relative;
}

.block a{
    margin-left:20px;
    margin-right:20px;
}

.scroll-icon{
    position: absolute;
    bottom: 5%;
    left:47%;
    opacity:0.5;
}

.brand-text{
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 80px;
}

@media(max-width: 700px){
  .brand-text{
    font-size: 80px;
  }
}

@media(max-width: 855px){
    .left{
        height: 100vh !important;
    }
}

.img-container { background-color: #000000; }
.img-container img { opacity: 0.3; }
.img-container img:hover{
    opacity: 0.8; 
}
</style>

<script>
import {homePageNotifsRef} from '../firebase';
import firebase from 'firebase';

export default {
    data () {
        return {

        }
    },
    firebase: {
        homePageNotifs : homePageNotifsRef
    },
}
</script>