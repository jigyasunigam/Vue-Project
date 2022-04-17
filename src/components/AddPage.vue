<template>
<HeaderPage/>
<h1>Hello! Welcome on Add Page</h1>
<form class="add">
 <input type="text" placeholder="Enter Hotel Name" v-model="hotels.name" name="name"/>
 <input type="text" placeholder="Enter Hotel Address" v-model="hotels.address" name="address"/>
 <input type="text" placeholder="Enter Hotel contact" v-model="hotels.contact" name="contact"/>
 <button type="button" v-on:click="addHotel">Add new Hotel</button>
</form>
</template>

<script>
import HeaderPage from "./HeaderPage.vue";
import axios from "axios";
export default {
 name: 'AddPage',
 components: {
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
 async addHotel(){
   const result=await axios.post("http://localhost:3000/hotels",{
    name:this.hotels.name,
    address:this.hotels.address,
    contact:this.hotels.contact,
   });
   if(result.status==201)
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
 }
};
</script>
