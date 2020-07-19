<template>
      <div class="row">
      <div class="col-sm-6">
      <form class="form-group" @submit.prevent="login">
          <h2>Login to account</h2>
          <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" v-model="email">
          </div><div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" v-model="password">
          </div>
        <button class="btn btn-primary btn-sm" >login</button>
      </form>
      </div>
  </div>
</template>
<script>
//import Vue from 'vue'
export default {
    name: 'Login',
    data(){
        return{
            email: '',
            password: '',
            errors: []
        }
    },
    methods:{
        login(){
            var vm = this
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password
            })
            .then(response => {
                vm.$router.push('/customers')
                 return response
            })
            .catch(error => {
                 return error
            })
        }
    }
}
</script>

<style>

</style>
