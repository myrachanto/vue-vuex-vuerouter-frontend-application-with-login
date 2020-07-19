import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from '../components/Home'
import Register from '../components/pages/Register'
import Login from '../components/pages/Login'
import Customer from '../components/admin/customers/Index.vue'
import CustomerForm from '../components/admin/customers/Form.vue'
import CustomerShow from '../components/admin/customers/Show.vue'

Vue.use(VueRouter)

  const routes = [
    
    {path: '/', component: Home, meta:{
      Auth: true}
      },
      {path: '/register', component: Register, meta:{
          Visitor: true}
      },
      {path: '/login', component: Login, meta:{
          Visitor: true}
      },
      
      {path: '/customers', component: Customer, meta:{
          Auth:true
      }},
      {path: '/customer/create', component: CustomerForm, meta: {Auth: true}},
      {path: '/customer/:id/edit', component: CustomerForm, meta: {mode: 'edit', Auth: true}},
      {path: '/customer/:id', component: CustomerShow, Auth: true},
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
