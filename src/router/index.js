import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../store/auth'

// Layouts
import AuthLayout from '../layouts/AuthLayout.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'

// Pages
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Overview from '../pages/Overview.vue'
import Transactions from '../pages/Transactions.vue'
import Profile from '../pages/Profile.vue'
import Categories from '../pages/Categories.vue'
import Accounts from '../pages/Accounts.vue'
import Budget from '../pages/Budget.vue'
import AiFunction from '../pages/AiFunction.vue'

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
            { path: '', name: 'Overview', component: Overview },
            { path: 'transactions', name: 'Transactions', component: Transactions },
            { path: 'profile', name: 'Profile', component: Profile },
            { path: 'categories', name: 'Categories', component: Categories },
            { path: 'accounts', name: 'Accounts', component: Accounts },
            { path: 'aifunction/:id', name: 'AiFunction', component: AiFunction },
            { path: 'budget', name: 'Budget', component: Budget },
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
//         next({ name: 'Overview' })
//     } else {
//         next()
//     }
// })

export default router
