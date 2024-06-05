import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import SignupView from '@/views/SignupView.vue';
import LoginView from '@/views/LoginView.vue';
import SharedLayout from '@/views/Dashboard/SharedLayout.vue';
import Fpage from '@/views/Dashboard/Fpage.vue';
import Spage from '@/views/Dashboard/Spage.vue';
import Tpage from '@/views/Dashboard/Tpage.vue';
import Dashboard from '@/views/Dashboard/Dashboard.vue';
import ListView from '@/views/University/ListView.vue'
import DetailView from '@/views/University/DetailView.vue'
import ScholarshipListView from '@/views/Scholarships/ScholarshipListView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'text-blue-600',
  linkExactActiveClass: 'text-blue-600',
  routes: [
    // public routes
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
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/university',
      name: 'university',
      component: ListView
    },
    {
      path: '/university/:id',
      name: 'university-detail',
      component: DetailView
    },

    {
      path: '/scholarships',
      name: 'scholarship-list',
      component: ScholarshipListView
    },
    

    // admin routes
    {
      path: '/admin',
      component: SharedLayout,
      children: [
        { path: '', component: Dashboard },
        { path: 'first', component: Fpage },

        { path: 'second', component: Spage },

        { path: 'third', component: Tpage },
      ],
      meta:{requiresAuth:true}
    },
    
  ]
});

router.beforeEach((to, from, next) => {
  // Check if the route being accessed requires authentication
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Try to get the authentication token from localStorage
    const authToken = localStorage.getItem('auth_token');
    
    if (!authToken) {
      // No token found, redirect to the login page
      next({ name: 'login' });
    } else {
      // Token found, proceed to the route
      next();
    }
  } else {
    // If the route does not require authentication, simply proceed
    next();
  }
});

router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 100);
  }
});
export default router;
