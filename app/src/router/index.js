import Vue from 'vue'
import VueRouter from 'vue-router'
import VideoList from '../views/VideoList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'VideoList',
    component: VideoList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
