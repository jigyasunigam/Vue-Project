<template>
<img class="logo" src="../assets/hm.jpg" />
<h1>Sign UP</h1>
<div class="register">
 <input type="text" v-model="name" placeholder="Enter Name"/>
 <input type="text" v-model="email" placeholder="Enter Email"/>
 <input type="password" v-model="password" placeholder="Enter Password"/>
 <button v-on:click="SignUp">Sign Up</button>
</div>
</template>

<script>
import axios from "axios"
export default {
 name: "SignUp",
 data()
 {
  return {
   name:"",
   email:"",
   password:"",
  }
 },
 methods:{
 async SignUp()
  {
   let result = await axios.post("http://localhost:3000/users",{
    name:this.name,email:this.email,password:this.password
   });
   console.warn(result);
   if(result.status==201){
    alert("fine");
   }
   localStorage.setItem("user-info",JSON.stringify(result.data))
  }
 }
}
</script>

<style>
.logo {
 width: 100px;
}

.register input{
 width: 300px;
 height: 40px;
 padding-left: 20px;
 display: block;
 margin-bottom: 30px;
 margin-left: auto;
 margin-right: auto;
 border: 1px solid orangered;
}

.register button{
width: 320px;
height: 40px;
border: 1px solid orangered;
color: whitesmoke;
font-size: x-large;
background: orangered;
cursor: pointer;
}
</style>
