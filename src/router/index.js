import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SignupView from '@/views/SignupView.vue';
import LoginView from '@/views/LoginView.vue';
import "preline/preline"; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: SignupView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
  ]
});

router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 100);
  }
});

export default router;
