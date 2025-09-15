import { defineStore } from 'pinia'
import axios from '../plugins/api' // file cấu hình axios

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        accessToken: null,
        refreshToken: null,
    }),
    getters: {
        isAuthenticated: (state) => !!state.accessToken,
        userEmail: (state) => state.user?.email || '',
    },
    actions: {
        async login(email, password) {
            const res = await axios.post('/auth/login', { email, password })
            this.accessToken = res.data.accessToken
            this.refreshToken = res.data.refreshToken
            this.user = res.data.user
        },
        async register(payload) {
            await axios.post('/auth/register', payload)
        },
        logout() {
            this.user = null
            this.accessToken = null
            this.refreshToken = null
        },
    },
})
