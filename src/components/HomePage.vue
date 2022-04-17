<template>
<HeaderPage/>
<h1>Hello! {{name}}, Welcome on Home Page</h1>
<table border="1px">
 <tr>
 <td>Id</td>
  <td>Name</td>
  <td>Address</td>
  <td>Contact</td>
  <td>Actions</td>
  </tr>
 <tr v-for="item in hotels" :key="item.id">
  <td>{{item.id}}</td>
  <td>{{item.name}}</td>
  <td>{{item.address}}</td>
  <td>{{item.contact}}</td>
 <td> <router-link :to="'/update/'+ item.id">Update</router-link>
 <button type="button" v-on:click="deleteHotel(item.id)">Delete</button>
 </td>
  </tr>
</table>
</template>

<script>
import axios from "axios";
import HeaderPage from "./HeaderPage.vue";
export default {
 name: 'HomePage',
  components:{
  HeaderPage
 },
 data(){
  return{
   name:"",
   hotels:[],
  }
 },
 methods:{
   async deleteHotel(id)
   {
     let result =await axios.delete("http://localhost:3000/hotels/"+id);
     if(result.status==200){
       this.loadData();
     }
 },
   async loadData(){ 
   let user = localStorage.getItem("user-info");
  this.name= JSON.parse(user).name
  if(!user){
   this.$router.push({name:"SignUpPage"})
  }
  let result =await axios.get("http://localhost:3000/hotels");
  this.hotels=result.data;     
 },
 },

mounted(){ 
   this.loadData();
 },
};
</script>
<style>

td{
 width:160px;
 height:40px
}
</style>
