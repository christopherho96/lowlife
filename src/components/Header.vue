<template>
    <div>
        <div class = "navbar-fixed">
            <nav>
                <div class = "container">
                    <div class="nav-wrapper">
                        <a href="" class="brand-logo"><img src="../assets/PNG/white/lowlife-white2.png"/></a>
                        <a @click="showNavigation = true" data-activates="mobile-nav" class="button-collapse">                                
                            <i class ="material-icons">menu</i>
                            </a>
                        <ul class="right hide-on-med-and-down">
                            <li>
                                <router-link to= "/">Home</router-link>
                            </li>
                            <li>
                                <router-link to= "/Experiences">Experiences</router-link>
                            </li>
                            <li>
                                <router-link to= "/Gallery">Gallery</router-link>
                            </li>
                            <li>
                                <router-link to= "/Media">Media</router-link>
                            </li>
                            <li>
                                <router-link to= "/Merchandise">Merchandise</router-link>
                            </li>
                            <li>
                                <router-link to= "/Contact">Contact</router-link>
                            </li>
                        </ul>
                        <!--Side Nav -->      
                    </div>
                </div>
            </nav>
        </div>
        <md-drawer :md-active.sync="showNavigation">
            <md-list>
                <!--SPACER-->
                <md-list-item>
                <span class="md-list-item-text">
                    <a v-on:click="showNavigation=false"><i class="fas fa-times fa-2x white-text exit"></i></a>
                </span>
                </md-list-item>
                <!--SPACER-->

                <md-list-item>
                <md-icon>home</md-icon>
                <span class="md-list-item-text">
                    <router-link class = "link" to= "/">Home</router-link>
                </span>
                </md-list-item>

                <md-list-item>
                <md-icon>event</md-icon>
                <span class="md-list-item-text"><router-link class = "link" to= "/Experiences">Experiences</router-link>
                </span>
                </md-list-item>

                <md-list-item>
                <md-icon>photo</md-icon>
                <span class="md-list-item-text"><router-link class = "link" to= "/Gallery">Gallery</router-link>
                </span>
                </md-list-item>

                <md-list-item>
                <md-icon>movie</md-icon>
                <span class="md-list-item-text"><router-link class = "link" to= "/Media">Media</router-link>
                </span>
                </md-list-item>

                <md-list-item>
                <md-icon>shop</md-icon>
                <span class="md-list-item-text"><router-link class = "link" to= "/Merchandise">Merchandise</router-link>
                </router-link>
                </span>
                </md-list-item>

                <md-list-item>
                <md-icon>mail</md-icon>
                <span class="md-list-item-text"><router-link class = "link" to= "/Contact">Contact</router-link>
                </router-link>
                </span>
                </md-list-item>
            </md-list>
        </md-drawer>
                 
    </div>
</template>

<script>
  export default {
    name: 'Temporary',
    data: () => ({
      showNavigation: false,
    })
  }
</script>

<style scoped>
li{
    font-family: 'Source Code Pro';
    font-weight: 300; 
}

li a{
    text-decoration: none !important;
    font-size: 12x;
}

.brand-logo{
    width: 125px;
}

.md-drawer {
    background: rgba(0, 0, 0, 0.8);
    height: 100vh;
    width: 100vh;
    max-width: 100vh;
    z-index: 1000;
}

.md-drawer .link{
    color:white !important;
}

.md-list-item-content{
}

.md-list-item{
    padding: 0 !important;
}

.md-icon{
    color: white !important;
}

nav{
    background-color: transparent;
}

</style>