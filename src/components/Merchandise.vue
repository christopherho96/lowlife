<template>
  <div>
      <div class="showcase valign-wrapper">
        <p class= "title center" style="width: 100%">Merch</p>
        <div class = "primary-overlay">
        </div>
      </div>
      <div class = "merch-list">
        <div class = "container">
          <!-- <h4 class = "center">Visual Catalog Only</h4>
          <p class = "center">Click here to visit official Lowlife store</p> -->
          <div class="row" v-for="i in Math.ceil(merch.length / 3)" :key="i">
            <div class = "col s12 m4" v-for="(item,index) in sortedFromMostRecentPosts.slice((i - 1) * 3, i * 3)" :key="index">
                <div class = "item">
                    <div class="card-image">
                        <img v-img:group :src="item.image"> 
                    </div>
                    <div>
                        <p class = "blog-title center white-text">{{item.name}}</p>
                        <p class = "price center white-text">{{item.price}}</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>

.title{
  font-family: 'Abel';
  font-size: 96px;
  z-index: 999;
  text-transform: uppercase;
}

.logo{
  margin-top:50px;
}

.blog-title{
  font-family: 'Knockout', sans-serif;
  font-size: 18px;
  margin-bottom: 0 !important;
}

.price{
  margin:0 !important;
}

.merch-list{
  padding-top: 30px;
  padding-bottom:30px;
  background-color: #110909;
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
  background: url(../assets/merch2.jpg);
  background-size: cover;
  background-position: center;
  height: 40vh;
  color: #fff;
  position:relative;
}

.primary-overlay{
  background: rgba(0, 0, 0, 0.2);
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.item{
  background-color: transparent;
  margin-top: 25px;
}

@media(max-width: 700px){
  .brand-text{
    font-size: 60px;
  }
  .showcase{
    min-height: 200px;
  }
}

</style>

<script>
import {merchRef} from '../firebase';
import firebase from 'firebase';
export default {

  computed: {
      sortedFromMostRecentPosts: function() {
        return this.merch.slice().reverse() 
      }
  },

  firebase:{
    merch: merchRef
  },

}
</script>