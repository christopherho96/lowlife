<template>
    <div class="container">
        <h2>Add New Items</h2>
        <form>
            <label>Item Name</label>
            <input type ="text"  v-model= "item.name" required/>
            <label>Price</label>
            <input type ="text"  v-model= "item.price" required/>
            <label for="">Image URL</label>
            <input type ="text"  v-model= "item.image" required/>
            <button v-on:click="saveItem" class = "btn" style = "margin-bottom: 50px">Save Item</button>
        <label>Items</label>
        <div class="row" v-for="i in Math.ceil(items.length / 3)" :key="i">
            <div class = "col s12 m4" v-for="(item,index) in sortedFromMostRecentPosts.slice((i - 1) * 3, i * 3)" :key="index">
                <div class="card blue-grey darken-4">
                    <div class="card-image">
                        <img v-img:group :src="item.image">
                    </div>
                    <div class="card-content">
                        <p class = "blog-title center white-text">{{item.name}}</p>
                        <p class = "center white-text">{{item.price}}</p>
                    </div>
                    <button v-on:click="remove(index)" class = "btn">X</button>
                </div>
            </div>
        </div>
        </form>

        <button v-on:click.prevent= "post" class = "btn btn-primary">Publish Items</button>
    </div>
</template>

<script>
import {merchRef} from '../../firebase'
export default {

  data () {
    return {
        id: this.$route.params.id,
        item: {
            name: '',
            price: '$',
            image: '',
        },
        items: [],
        }
    },
    firebase:{
        merch: merchRef
    },

    
    computed: {
      sortedFromMostRecentPosts: function() {
        return this.items.slice().reverse() 
      }
    },

    methods: {
    post: function(){
        if (this.items.length < 1){
            this.$swal("No Items", "Please fill out all fields and save item.", {
                closeOnClickOutside: false 
            })
        }else{
            this.items.forEach(function(item) {
                merchRef.push(item)
            });
            this.$swal("Success", "Your items have been publised." , "success", {
                closeOnClickOutside: false 
            }).then((value) => {
                if (value == true){
                    this.$router.push('/admin/AdminMerch');
                }
            });
        }

    },
    saveItem(){
        if (this.item.name == "" || this.item.price == "" || this.item.image == ""){
            this.$swal("Missing Fields", "Please fill out all details", {
                closeOnClickOutside: false 
            })
        } else {
            let newItem = {
                name: this.item.name,
                price: this.item.price,
                image: this.item.image
            }
            this.items.push(newItem)
        }

    },
    remove(index){
        console.log(index)
        this.items.splice(index, 1)
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