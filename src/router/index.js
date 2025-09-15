import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../store/auth'

// Layouts
import AuthLayout from '../layouts/AuthLayout.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'

// Pages
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Dashboard from '../pages/Dashboard.vue'
import Transactions from '../pages/Transactions.vue'
import Profile from '../pages/Profile.vue'

const routes = [
    {
        path: '/auth',
        component: AuthLayout,
        children: [
            { path: 'login', name: 'Login', component: Login },
            { path: 'register', name: 'Register', component: Register },
        ],
        meta: { requiresAuth: false },
    },
    {
        path: '/',
        component: DefaultLayout,
        children: [
            { path: '', name: 'Dashboard', component: Dashboard },
            { path: 'transactions', name: 'Transactions', component: Transactions },
            { path: 'profile', name: 'Profile', component: Profile },
        ],
        meta: { requiresAuth: true },
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/auth/login',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// Middleware check auth
// router.beforeEach((to, from, next) => {
//     const authStore = useAuthStore()

//     if (to.meta.requiresAuth && !authStore.accessToken) {
//         next({ name: 'Login' })
//     } else if (to.name === 'Login' && authStore.accessToken) {
//         next({ name: 'Dashboard' })
//     } else {
//         next()
//     }
// })

export default router
