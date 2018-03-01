<template>
    <div>
        <div class ="row">
            <div class = "col hide-on-small-only m8">
                <div class = "showcase">
                    <div class = "primary-overlay">
                    </div>
                </div>
            </div>
            <div class ="col s12 m4 ">
                <div class = "write-up valign-wrapper center grey darken-4 white-text">
                    <div class = "container">
                        <div class = "description">
                            <img class = "brand-logo" src="../assets/lowlife-02-white.png"/>
                            <p class = "low-header">WHO IS LOWLIFE?</p>
                            <p class = "low-body">Lowlife is a movement of collective individuals aspiring to grow as artists in the heart of Toronto.</p> 
                            <p>Lowlife is not just a brand; its a culture, a movement, and a way of life providing the opportunity for underground artists to leave a legacy behind. Whether it is a podcast series on SoundCloud, curating creative content on Youtube, or posting videos on Instagram, Lowlife encourages individuals in the hip hop scene to share their talents within the city.</p>
                            <p>We work from the ground up to build and form a society supporting the Toronto Culture. Looking into the future, Lowlife strives to be international connecting with artists all over the world and continuing to solidify this platform of talent.</p>
                            <router-link v-bind:to= "'/Contact'" class = "btn yellow darken-3 black-text">Contact</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.btn{
    margin-top:25px;
}
.description{
    padding-top: 50px;
    padding-bottom: 50px;
}
.brand-logo{
    width: 200px;
}
.low-header{
    font-family: 'Roboto Mono', sans-serif;
    font-weight: 200;
    font-size: 28px;
}

.low-body{
    font-family: 'Roboto', sans-serif !important;
}
.col{
    padding: 0 !important;
}
.brand-text{
    font-family: 'Lato', sans-serif;
    font-weight: 200;
    font-size: 120px;
}

h3{
  padding-top: 50px;
}

.showcase{
  background: url(../assets/about.jpg);
  background-size: contain ;
  background-position: center;
  height: 100vh;
  min-height: 250px;
  color: #fff;
  position:relative;
}

.primary-overlay{
  background: rgba(0, 0, 0, 0.5);
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.write-up{
    height: 100vh;
}

</style>

<script>
import header from './Header.vue';
export default {
  components: {
    'app-header': header
  },
  data () {
    return {
    }
  },
}
</script>