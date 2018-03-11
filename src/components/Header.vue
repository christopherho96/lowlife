<template>
    <div>
        <div class = "navbar-fixed">
            <nav>
                <div class = "container">
                    <div class="nav-wrapper">
                        <a href="" class="brand-logo"><img src="../assets/lowlife-02-white.png"/></a>
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
                                <router-link to= "/Contact" class = "btn yellow darken-3 black-text">Contact</router-link>
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
                <span class="md-list-item-text"></span>
                </md-list-item>
                <!--SPACER-->

                <md-list-item>
                <md-icon>home</md-icon>
                <span class="md-list-item-text">
                    <router-link to= "/">Home</router-link>
                </span>
                </md-list-item>

                <md-list-item>
                <md-icon>event</md-icon>
                <span class="md-list-item-text"><router-link to= "/Experiences">Experiences</router-link>
                </span>
                </md-list-item>

                <md-list-item>
                <md-icon>photo</md-icon>
                <span class="md-list-item-text"><router-link to= "/Gallery">Gallery</router-link>
                </span>
                </md-list-item>

                <md-list-item>
                <md-icon>movie</md-icon>
                <span class="md-list-item-text"><router-link to= "/Media">Media</router-link>
                </span>
                </md-list-item>

                <md-list-item>
                <md-icon>shop</md-icon>
                <span class="md-list-item-text"><router-link to= "/Media"><router-link to= "/Merchandise">Merchandise</router-link>
                </router-link>
                </span>
                </md-list-item>

                <md-list-item>
                <md-icon>mail</md-icon>
                <span class="md-list-item-text"><router-link to= "/Media"><router-link to= "/Contact">Contact</router-link>
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
    font-family: 'Roboto Mono', sans-serif;
    font-weight: 300;  
}
.brand-logo{
    width: 75px;
}

.md-drawer {
    background-color:white;
}

nav{
    background-color:#10002E !important;
}

</style>