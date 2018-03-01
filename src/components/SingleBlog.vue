<template>
    <div class = "container">
        <div class="row">
            <div class="col m9 l10 s12 content">
                <h1 class = "blog-title">{{blog.title}}</h1>
                <div class = "row">
                    <div class = "col s6">
                        <p class = "left-align">BY {{blog.author}} </p>
                    </div>
                    <div class = "col s6">
                        <p class = "right-align grey-text">{{blog.date}}</p>
                    </div>
                </div>
                <img :src="blog.imageURL" width="100%" style="padding-bottom:25px;">
                <article style="white-space: pre-wrap;">{{blog.content}}</article>
                <social-sharing :url="this.$route.fullPath" inline-template>
                    <div class = "row buttons">
                        <network network="facebook" class="btn btn-primary blue darken-4">
                        <i class="fab fa-facebook"></i> Facebook
                        </network>
                        <network network="twitter" class="btn btn-primary blue">
                        <i class="fab fa-twitter"></i> Twitter
                        </network>
                    </div>  
                </social-sharing>
            </div>
            <!-- fixed side bar --> 
            <div class="col hide-on-small-only m3 l2 s12">
                <ul class="pinned section table-of-contents">
                <h5>TRENDING NOW </h5>
                <li v-for="(blogPost,index) in blogPosts" :key="index">
                    <div v-if="blogPost['.key'] != id" class = "row">
                        <a v-on:click = "loadNewBlogPost(blogPost['.key'])">{{blogPost.title}}</a>
                    </div>
                </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.blog-title{
  font-family: 'Roboto Mono', sans-serif;
}
.content{
    padding-bottom:50px;
}
.buttons{
    margin-top:25px;
}

</style>

<script>
import {blogPostsRef} from '../firebase'
import moment from 'moment'
export default{
    props: ['index'],
    data(){
        return{
            id: this.$route.params.id,
            blog: {},
        }
    },

    firebase:{
        blogPosts: blogPostsRef
    },
    created(){
        console.log(this.$route.fullPath)
        let blogPostID = this.id;
        let thisBlog;
        this.blogPosts.forEach(function(blogPost) {
            if (blogPost['.key'] === blogPostID) {
                 thisBlog = blogPost
            }
        });
        this.blog = thisBlog;    
    },
    methods:{
        loadNewBlogPost(key){
            var route = '/blog/' + key
            this.id = key
            let blogPostID = key;
            let thisBlog;
            this.blogPosts.forEach(function(blogPost) {
                if (blogPost['.key'] === blogPostID) {
                    thisBlog = blogPost
                }
            });
            this.blog = thisBlog;
        }
    }
}
</script>