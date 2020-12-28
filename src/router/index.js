import Vue from 'vue'
import VueRouter from 'vue-router'
import MiLife from '@/views/Mi_Life'

Vue.use(VueRouter)

const routes = [
  { path: '/' ,redirect: '/milife' },
  { path: '/milife', component: MiLife }
]

const router = new VueRouter({
  routes
})

export default router
