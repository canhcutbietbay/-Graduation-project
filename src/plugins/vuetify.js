// Vuetify setup
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Icons
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                colors: {
                    primary: '#1E88E5',   // Xanh dương: niềm tin, tài chính, sự ổn định
                    secondary: '#43A047', // Xanh lá: tăng trưởng, tiền bạc, thành công
                    accent: '#FB8C00',    // Cam: nhấn mạnh nút hành động (CTA)
                    error: '#E53935',     // Đỏ: cảnh báo, lỗi
                    info: '#29B6F6',      // Xanh nhạt: thông báo
                    success: '#4CAF50',   // Xanh lá sáng: thành công
                    warning: '#FDD835',   // Vàng: cảnh báo mềm
                },
            },
            dark: {
                colors: {
                    primary: '#90CAF9',   // xanh nhạt để dễ đọc
                    secondary: '#A5D6A7',
                    accent: '#FFB74D',
                    error: '#EF9A9A',
                    info: '#81D4FA',
                    success: '#66BB6A',
                    warning: '#FFF176',
                },
            },
        },
    },
})

export default vuetify
