<template>
    <div>
        <div class = "row">
            <div class = "col s12 m8 left">
                <div class ="primary-overlay valign-wrapper">
                    <div class= "col s12 main-text center">
                        <h1 class ="brand-text">LOWLIFE</h1>
                        <div class = "notice-board">
                            <h5 class = "black-text">UPDATES</h5>
                            <article style="white-space: pre-wrap;" class = "black-text">What is Lorem Ipsum?

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</article>
                         </div>   
                        <router-link v-bind:to= "'/About'" class="btn btn-large yellow darken-3 black-text">Learn More</router-link>
                    </div>
                </div>
            </div>
            <div class = "col s12 m4 right">
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
            </div>
        </div>
    </div>
</template>

<style scoped>

.notice-board{
    margin-left: 100px;
    margin-right: 100px;
    margin-bottom: 50px;
    padding: 30px 50px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.6);
}
.block .lowlifefont{
    font-family: 'Roboto Mono', sans-serif;
    font-weight:300;
    font-size: 45px;
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
    background: url(../assets/hats.jpg);
    background-size:cover;
    background-position:center;
    height: 100vh;
    color: #fff;
    position:relative;
}

.right-top{
    height: 70vh;
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

.img-container { background-color: #000000; }
.img-container img { opacity: 0.3; }
.img-container img:hover{
    opacity: 0.8; 
}
</style>

<script>
import header from './Header.vue';
import firebase from 'firebase'

export default {
    components: {
        'app-header': header
    },
}
</script>