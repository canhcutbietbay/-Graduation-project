import { defineStore } from 'pinia'
import axios from '../plugins/api' // file cấu hình axios

export const useUserStore = defineStore('user', {
    state: () => ({
        profile: null,
    }),
    actions: {
        async fetchProfile() {
            const res = await axios.get('/user/profile')
            this.profile = res.data
        },
        async updateProfile(data) {
            const res = await axios.put('/user/profile', data)
            this.profile = res.data
        },
    },
})
