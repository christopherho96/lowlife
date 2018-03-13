<template>
  <section class="section section-login valign-wrapper">
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2 l6 offset-l3">
          <div class="card-panel login white-text center">
            <img src="../../assets/PNG/white/lowlife-white-word.png" alt="" class="responsive-img brand-logo">
            <form action="index.html">
              <div class="input-field">
                <i class="material-icons prefix">email</i>
                <input type="email" id="email" v-model="email">
                <label class="white-text" for="email">Email</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">lock</i>
                <input type="password" id="password" v-model="password">
                <label class="white-text" for="password">Password</label>
              </div>
              <button v-on:click="login" class="btn btn-large btn-extended grey lighten-4 black-text">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .brand-text{
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    font-size: 60px;
    text-align: center;
  }
  .brand-logo{
    width:200px;
    margin-bottom: 25px;
    margin-top: 10px;
  }

  .section-login{
    height:90vh;
  }

  .login{
    background-color:#10002E !important;
  }
</style>

<script>

import firebase from 'firebase';
import store from '../../store';
export default {
  name: 'login',
  data: function() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            store.dispatch('setLogInState', true)
            this.$swal("Logged In", "Welcome back to Lowlife admin panel." ,"success", {
                  closeOnClickOutside: false 
            }).then((value) => {
                this.$router.push('/admin/HomePage');
            }) 
          },
          err => {
            this.$swal("Error", err.message ,"error", {
                  closeOnClickOutside: false 
            })
          }
        );
      e.preventDefault();
    }
  }
};
</script>