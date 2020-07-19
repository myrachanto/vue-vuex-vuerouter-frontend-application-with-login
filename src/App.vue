<template>
<div class="container-fluid">

  <div class="nav-top  navbar-fixed-top">
  <div class="container-fluid">
   <div class="row">
     <div class="col-xs-6">
       <a href="#" >RESPONSIVE ECOMMERCE STORE|+254729308456|info@chantosweb.com</a>
     </div>

          <div class="col-xs-6" align="right"><a href="#" >currency</a>|<a href="#" >shipping</a>|<a href="#" >share</a>
    
   </div>
   </div>
 </div>
</div>
<div class="d">
     <nav class="navbar navbar-fixed-top">

    <div class="navbar-header" >
     <button type="button" class="navbar-toggle btnab" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                     
  
      </button>
        <router-link class="navbar-brand" to="/">shop</router-link>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
    <li v-if="!loggedIn"><router-link to="/register" >Register</router-link></li>
    <li v-if="!loggedIn"><router-link to="/login">Login</router-link></li>
    <li v-if="loggedIn"><router-link to="/customers">customer</router-link></li>
             <li v-if="loggedIn" class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#">{{username}}
        <span class="caret"></span></a>
            <ul class="dropdown-menu">
        <li v-if="employee"><router-link to="">Employee</router-link></li>
        <li v-if="supervisor"><router-link to="">Supervisor</router-link></li>
        <li v-if="admin"><router-link to="">Admin</router-link></li>
        <li><a @click.stop="logout">Logout</a></li>
        </ul></li>
                      
      
        </ul>
        </div>
</nav>
</div>
<router-view></router-view>
</div>
</template>

<script>
//import Home from './components/Home.vue'

import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
   // Home,
  },
  computed: mapGetters(['loggedIn','username','admin','supervisor','employee']),
  // computed:{
  //   loggedIn(){
  //     return this.$store.getters.loggedIn
  //   },
  //   username(){
  //     return this.$store.getters.username
  //   },
  //   admin(){
  //     return this.$store.getters.admin
  //   },
  //   supervisor(){
  //     return this.$store.getters.supervisor
  //   },
  //   employee(){
  //     return this.$store.getters.employee
  //   },
  // },
  methods:{
    logout(){
      this.$store.dispatch('logout')
      .then(() => {
          this.$router.push('/login')
      })
    }
  }
}
</script>

<style >
/* body {
      // background-image: url("img/interior/interior3.jpg");
      background-repeat: no-repeat;
      font: 400 15px Lato, "Palatino Linotype", "Book Antiqua", Palatino, serif;
      line-height: 1.8;
      background-attachment: fixed;
   // background: rgba(46, 139, 87, 0.7) /* seaGreen background with 30% opacity  
    } */
  h2 {
      font-size: 24px;
      text-transform: uppercase;
      color: black;
      font-weight: 600;
      margin-bottom: 10px;
  }
  .d{
    margin-bottom: 70px;
  }
  h4 {
      font-size: 19px;
      line-height: 1.375em;
      color: #87ceeb;
      font-weight: 400;
      margin-bottom: 10px;
  }  
.navbar {
    margin-top: 30px;
    margin-bottom: 100px;
    color: #F8F8FF !important;
    background-color: #006400 !important;
    z-index: 9999;
    border: 0;
    font-size: 12px !important;
    line-height: 1.42857143 !important;
    letter-spacing: 2px;
	border-radius: 2;
    float:left;
    
}
.logo {
      color: black;
      font-size: 500px;
      float: left;

  }
.navbar li a, .navbar .navbar-brand {
    color: #F8F8FF !important;
}
.navbar-nav li a:hover, .navbar-nav li.active a {
    color: #F8F8FF !important;
    background-color: #006400 !important;
}

.navbar-default .navbar-toggle {
    border-color: transparent;
    color: #2E8B57 !important;
}
.btn {
    margin: 15px 0;
    background-color: #20B2AA;
    color: #2E8B57;
}
.btnab {
    background-color: #1e90ff;
    
}

.btn:hover {
    border: 1px solid #f4511e;
    background-color: #20B2AA !important;
    color: #F8F8FF;
}
.carousel-control.right, .carousel-control.left {
      background-image: none;
      color: #30C;
  }
  .carousel-indicators li {
      border-color: #30C;
  }
  .carousel-indicators li.active {
      background-color: #30C;
  }
.specialh{
    font-family: 'Sofia';
}
.carodiv {
  background:  rgba(0,100,0, 0.8);
   color:white;
}
.carodiv2 {
    background: rgba(248, 248, 255, 0.9);

}
.carodiv3 {
    background: rgba(220, 220, 220, 0.9)/*gainsboro*/

}
.alterdiv1 {
    background:rgba(255, 255, 240, 0.9);
}
.alterdiv2 {
    background:rgba(248, 248, 255, 0.9);
}
.imgstyle:hover {
    box-shadow: 5px 0px 40px rgba(65, 105, 225, 0.5);
}
input[type=text] {
    
    box-sizing: border-box;
    border: 2px solid #ccc;
    background-color: white;
    /* //background-image: url('searchicon.png'); */
    background-position: 10px 10px; 
    background-repeat: no-repeat;
    padding: 6px 10px 6px 20px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
}

input[type=text]:focus {
    width: 100%;
}
.nav-top {
  width: 100%;
  height: 30px;
  background:  rgba(0,100,0, 0.8);
  color: #f8f8ff;
  text-transform: uppercase;
  text-align: left;
  position: fixed;
  overflow: hidden;
}
.nav-top a { color: white; }
.nav-top a:hover { text-decoration: underline; }
.nav-top div.row { padding: 10px 0; }
.navbar-fixed-top { transition: all 3s ease; }
ul.share-buttons{
  list-style: none;
  padding: 0;
}

ul.share-buttons li{
  display: inline;
}

ul.share-buttons .sr-only {
  position: absolute;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
}

ul.share-buttons img{
  width: 32px;
}
.logo {
      color: white;
      float: left !important;

  }
.forms{
    color:white;
}
.btnada{
    color:green !important;
}

</style>
