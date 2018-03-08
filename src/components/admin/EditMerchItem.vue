<template>
  <div class = "container">
    <h2>Edit Item</h2>
    <form>
        <label>Item Name</label>
        <input type ="text"  v-model= "item.name" required/>
        <label>Price</label>
        <input type ="text"  v-model= "item.price" required/>
        <label for="">Image URL</label>
        <input type ="text"  v-model= "item.image" required/>
        <img v-img:group :src="item.image">
        <button v-on:click.prevent= "post" class = "btn btn-primary" style="margin-top:50px; margin-bottom:50px">UPDATE</button>
        <button class="btn red waves-effect waves-light modal-trigger" v-on:click="deleteItem()">Delete</button>   
    </form>
              
  </div>
</template>

<script>
import {merchRef} from '../../firebase'
export default {

  data () {
    return {
        id: this.$route.params.id,
        item: {},
    }
  },

    firebase:{
        merch: merchRef
    },
    created(){
        console.log(this.$route.fullPath)
        let itemID = this.id;
        let thisItem;
        this.merch.forEach(function(item) {
            if (item['.key'] === itemID) {
                    thisItem = item
            }
        });
        this.item = thisItem;
    },
    methods: {
        post: function(){

            if (this.item.name == "" || this.item.price == "" || this.item.image == ""){
                this.$swal("Missing Fields", "Please fill out all details", {
                    closeOnClickOutside: false 
                })
            } else {
                merchRef.child(this.id).set({
                    name: this.item.name,
                    price: this.item.price,
                    image: this.item.image
                })
                this.$swal("Updated", "Your item has been updated." , "success", {
                    closeOnClickOutside: false 
                }).then((value) => {
                    if (value == true){
                        this.$router.push('/admin/AdminMerch');
                    }
                });
            }
        },
        deleteItem(){
            swal({
                title: "Are you sure?",
                text: "This will remove the item from the merchandise page",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                closeOnClickOutside: false,
                })
                .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                    });
                    merchRef.child(this.id).remove();
                    this.$router.push('/admin/AdminMerch');
                } else {
                    
                }
                });
        }
        // addItem(){
        //     this.event.images.push({image: this.imageURL})
        //     this.imageURL = ''
        // },
        // remove(index){
        //     this.event.images.splice(index, 1)
        // }
    }
}
</script>

<style>


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