import HomePage from "./components/HomePage.vue"
import SignUp from "./components/SignUp.vue"
import {createRouter,createWebHistory} from "vue-router"
import LoginPage from "./components/Login.vue"

const routes=[
 {
  name:"HomePage",
  component:HomePage,
  path:"/"
 },
 {
  name:"SignUp",
  component:SignUp,
  path:"/sign-up"
 },
 {
  name:"Login",
  component:LoginPage,
  path:"/login"
 },
]
const router=createRouter({
 history:createWebHistory(),
 routes
})

export default router