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
      path: '/voyagers',
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

router.afterEach((to) => {
  if (to.query.origin === "wallet") {
    sessionStorage.setItem("isWallet", "true");
  }
});

export default router
