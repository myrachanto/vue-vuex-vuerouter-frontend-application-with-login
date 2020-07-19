<template>
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
                      
       <li><form action="{{ url('/search') }}" method="get">
  <input type="text" name="keyword" placeholder="Search..">
  
              <button type="submit" class="btn btn-default">search</button>
            </form></li>
        </ul>
        </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>