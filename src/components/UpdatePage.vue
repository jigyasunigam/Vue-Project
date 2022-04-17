<template>
<HeaderPage/>
<h1>Hello! Welcome on Update Page</h1>
<form class="add">
 <input type="text" placeholder="Enter Hotel Name" v-model="hotels.name" name="name"/>
 <input type="text" placeholder="Enter Hotel Address" v-model="hotels.address" name="address"/>
 <input type="text" placeholder="Enter Hotel contact" v-model="hotels.contact" name="contact"/>
 <button type="button" v-on:click="updateHotel">Update Hotel</button>
</form>
</template>

<script>
import axios from "axios";
import HeaderPage from "./HeaderPage.vue";
export default {
 name: 'UpdatePage',
 components:{
  HeaderPage
 },
 data()
 {
  return{
   hotels:{
    name:"",
    address:"",
    contact:""
   }
  }
 },
methods:{
 async updateHotel(){
   const result=await axios.put("http://localhost:3000/hotels/"+ this.$route.params.id,{
    name:this.hotels.name,
    address:this.hotels.address,
    contact:this.hotels.contact,
   });
   if(result.status==200)
   {
    this.$router.push({name:"HomePage"})
   }
  }
 },
 async mounted() {
  let user = localStorage.getItem("user-info");
  if (!user) {
   this.$router.push({
    name: "SignUpPage"
   })
  }
  const result=await axios.get("http://localhost:3000/hotels/"+ this.$route.params.id)
  this.hotels=result.data
 },
};
</script>
