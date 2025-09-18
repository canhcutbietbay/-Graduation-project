import axios from 'axios'
import { useAuthStore } from '../store/auth'

// Tạo instance axios
const api = axios.create({
    baseURL: 'http://localhost:3000/', // đổi URL backend theo môi trường
    headers: {
        'Content-Type': 'application/json',
    },
})

// Thêm accessToken vào request
// api.interceptors.request.use((config) => {
//     const authStore = useAuthStore()
//     if (authStore.accessToken) {
//         config.headers.Authorization = `Bearer ${authStore.accessToken}`
//     }
//     return config
// })

// Xử lý refresh token khi accessToken hết hạn
// api.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const authStore = useAuthStore()

//         if (error.response?.status === 401 && authStore.refreshToken) {
//             try {
//                 // gọi API refresh
//                 const res = await axios.post('http://localhost:3000/api/auth/refresh', {
//                     refreshToken: authStore.refreshToken,
//                 })

//                 // cập nhật token mới
//                 authStore.accessToken = res.data.accessToken
//                 authStore.refreshToken = res.data.refreshToken

//                 // gắn lại token vào request cũ rồi gửi lại
//                 error.config.headers.Authorization = `Bearer ${authStore.accessToken}`
//                 return api.request(error.config)
//             } catch (refreshError) {
//                 authStore.logout()
//             }
//         }

//         return Promise.reject(error)
//     }
// )

export default api
