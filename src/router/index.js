import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashView from '../views/DashView.vue'
import PathNotFound from '../views/NotFound.vue'

const router = createRouter({

  mode: "history",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dash',
      name: 'dash',
      component: DashView
    },

    // {
    // path: '/about',
    // name: 'about',
    // component: () => import('../views/AboutView.vue')
    // }

    {
      path: '/:pathMatch(.*)*',
      component: PathNotFound
    },
  ]
})

export default router
