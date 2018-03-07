<template>
    <div>
        <div class = "navbar-fixed">
            <nav class = "blue-grey darken-4">
                <div class = "container">
                    <div class="nav-wrapper">
                        <a href="" class="brand-logo"><img src="../assets/lowlife-02-white.png"/></a>
                        <a href="" data-activates="mobile-nav" class="button-collapse">                                
                            <i class ="material-icons">menu</i>
                        </a>
                        <ul class="right hide-on-med-and-down">
                            <li>
                                <router-link to= "/">Home</router-link>
                            </li>
                            <li>
                                <router-link to= "/EventsPage">Events</router-link>
                            </li>
                            <li>
                                <router-link to= "/Gallery">Gallery</router-link>
                            </li>
                            <li>
                                <router-link to= "/Media">Media</router-link>
                            </li>
                            <li>
                                <router-link to= "/Contact" class = "btn yellow darken-3 black-text">Contact</router-link>
                            </li>
                        </ul>
                        <!--Side Nav -->
                        <ul class="side-nav" id ="mobile-nav">
                            <h4 class ="blue-grey darken-3 center">LOWLIFE</h4>
                            <li>
                                <a class ="divider"></a>
                            </li>
                            <li>
                                <router-link to= "/">Home</router-link>
                            </li>
                            <li>
                                <router-link to= "/EventsPage">Events</router-link>
                            </li>
                            <li>
                                <router-link to= "/ListOfBlogPosts">Blog</router-link>
                            </li>
                            <li>
                                <router-link to= "/Media">Media</router-link>
                            </li>
                            <li>
                                <router-link to= "/Gallery" class = "btn yellow darken-3 black-text">Contact</router-link>
                            </li>         
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>

export default {

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

</style>