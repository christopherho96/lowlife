<template>
    <div class="container">
        <h2>Add a New Blog Post</h2>
        <form v-if = "!blog.submitted">
            <label>Blog Title</label>
            <input type ="text"  v-model.lazy= "blog.title" required/>
            <label>Date</label>
            <input type ="text"  v-model.lazy= "blog.date" required/>
            <label>Author</label>
            <input type ="text"  v-model.lazy= "blog.author" required/>
            <label for="">Blog Content</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <label for="">Image URL</label>
            <input type ="text"  v-model.lazy= "blog.imageURL" required/>
        </form>

        <div v-if = "blog.submitted">
            <p>You have submitted your post</p>
        </div>
        <div id = "preview">
            <h3>Preview Blog</h3>
            <p>Blog Title: {{blog.title}}</p>
            <p>Blog Content:</p>
            <p style= "white-space: pre-wrap;">{{blog.content}}</p>
        </div>
        <button v-on:click.prevent= "post" class = "btn btn-primary">Publish</button>
    </div>
</template>

<script>
import {blogPostsRef} from '../../firebase'
export default {

  data () {
    return {
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
    methods: {
    post: function(){
        blogPostsRef.child(this.id).set({
            content: this.blog.content,
            date: this.blog.date,
            imageURL: this.blog.imageURL,
            title: this.blog.title
        })
        alert(`Your blog post has been updated.`);
        this.$router.push('/admin/ViewBlogs');
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