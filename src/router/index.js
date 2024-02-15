import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import Characters from '../pages/Characters.vue'
import Reel from '../pages/Reel.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters
    },
    {
      path: '/reel',
      name: 'reel',
      component: Reel,
      props: true
    }
  ]
})

export default router
