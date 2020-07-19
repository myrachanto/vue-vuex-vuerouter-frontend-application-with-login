<template>
  <div class="row">
      <div class="col-sm-6">
      <form class="form-group" @submit.prevent="Register">
          <h2>create an account</h2>
          <div class="form-group">
              <label>First Name</label>
              <input type="text" class="form-control" v-model="fname">
          </div>
          <div class="form-group">
              <label>Last Name</label>
              <input type="text" class="form-control" v-model="lname">
          </div>
          <div class="form-group">
              <label>User Name</label>
              <input type="text" class="form-control" v-model="uname">
          </div>
          <div class="form-group">
              <label>Phone</label>
              <input type="text" class="form-control" v-model="phone">
          </div>
          <div class="form-group">
              <label>Address</label>
              <input type="text" class="form-control" v-model="address">
          </div>
          <div class="form-group">
              <label>Date of Birth</label>
              <input type="text" class="form-control" v-model="dob">
          </div>
          <div class="form-group">
              <label>Picture</label>
              <input type="text" class="form-control" v-model="picture">
          </div>
          <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" v-model="email">
          </div>
          <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" v-model="password">
          </div>
        <button class="btn btn-primary btn-sm" >Register</button>
      </form>
      </div>
  </div>
</template>

<script>
export default {
     name: 'Register',
    data(){
        return{
            fname: '',
            lname: '',
            uname: '',
            phone: '',
            address: '',
            dob: '',
            picture: '',
            email: '',
            password: '',
        }
    },
    methods:{
        Register(){
         this.$store.dispatch('Register', {
               fname: this.fname,
                lname: this.lname,
                uname: this.uname,
                phone: this.phone,
                address: this.address,
                dob: this.dob,
                picture: this.picture,
                email: this.email,
                password: this.password,
            })
            .then(() => {
                this.$router.push('/login')
            })
            .catch(error => {
                // eslint-disable-next-line no-console
                console.log(error)
                return error
            })
        }
    }
}
</script>

<style>

</style>
