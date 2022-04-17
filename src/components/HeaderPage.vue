<template>
<div class="nav">
 <router-link to="/">Home</router-link>
  <router-link to="add">Add Hotel</router-link>
 <a v-on:click="logout" href="#">Logout</a>
</div>
</template>

<script>
export default {
 name: 'HeaderPage',
 methods:{
  logout(){
  localStorage.clear();
  this.$router.push({name:"LoginPage"})
 }
 }
};
</script>

<style>
.nav{
 background-color:#fc9d03;
 overflow:hidden;
}
.nav a{
 float:left;
 color:white;
 text-align:center;
 padding:16px 14px;
 text-decoration:none;
 float-size : 16px;
 margin-right:4px;
}
.nav a:hover{
 background-color:orangered;
 color:white
}
</style>