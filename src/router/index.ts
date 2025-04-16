import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/login', name: 'Login', component: LoginView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const auth = getAuth()
  const user = auth.currentUser

  const requiresAuth = to.name !== 'Login'

  if (requiresAuth && !user) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
