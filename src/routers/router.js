import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Apartment from '../views/Apartment.vue'
import ErrorPage from '../views/ErrorPage.vue'
// import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/apartment',
      name: 'apartment',
      component: Apartment
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error-page',
      component: ErrorPage
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/Login.vue')
    // }
  ]
})

export default router
