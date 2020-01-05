import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {path:'/about',component:()=>import('../views/About.vue')},
      {path:'/creshop',name:'creshop',component:()=>import('../views/children-home/create-list.vue')},
      {path:'/shop',name:'shop',component:()=>import('../views/children-home/shoplist.vue')},
      {path:'/user',name:'user',component:()=>import('../views/children-home/User.vue')},
      {path:'/shopany',name:'shopany',component:()=>import('../views/children-home/shopany.vue')},
      {path:'/flow',name:'flow',component:()=>import('../views/children-home/flow.vue')},
      {path:'/admin',name:'admin',component:()=>import('../views/children-home/admin.vue')}
    ]
  },
  {
    path: '/login',
    name: 'login',
    component:Login
  }
]

const router = new VueRouter({
  routes
})

export default router
