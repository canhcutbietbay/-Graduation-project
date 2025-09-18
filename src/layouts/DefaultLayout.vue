<template>
    <v-app>
        <!-- Navbar -->
        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon @click="drawer = !drawer" />
            <v-toolbar-title>QUẢN LÍ CHI TIÊU CÁ NHÂN</v-toolbar-title>
            <v-spacer />
            <v-btn icon @click="toggleTheme">
                <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
        </v-app-bar>

        <!-- Sidebar -->
        <v-navigation-drawer v-model="drawer" app>
            <v-list>
                <v-list-item :prepend-avatar="user.imgUrl" :subtitle="user.email" :title="user.name"
                    :to="{ name: 'Profile' }"></v-list-item>
            </v-list>

            <v-list>
                <v-list-item v-for="item in menuItems" :key="item.title" :to="item.to" :prepend-icon="item.icon" link
                    color="primary" exact>
                    <!-- custom title -->
                    <v-list-item-title class="wrap-text">
                        {{ item.title }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
            <template v-slot:append>
                <div class="pa-2">
                    <v-btn block color="primary">
                        Logout
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>

        <!-- Main content -->
        <v-main>
            <v-container class="pa-4">
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const drawer = ref(true)

const menuItems = [
    { title: 'TỔNG QUAN', icon: 'mdi-view-dashboard', to: { name: 'Overview' } },
    { title: 'QUẢN LÍ GIAO DỊCH', icon: 'mdi-cash-multiple', to: { name: 'Transactions' } },
    { title: 'QUẢN LÍ NHÓM', icon: 'mdi-shape', to: { name: 'Categories' } },
    { title: 'QUẢN LÍ TÀI KHOẢN', icon: 'mdi-account-cog', to: { name: 'Accounts' } },
    { title: 'CHỨC NĂNG AI', icon: 'mdi-robot-outline', to: { name: 'AiFunction' } },
]

const user = ref({
    name: "hehehe",
    email: "admin@gmail.com",
    imgUrl: "https://randomuser.me/api/portraits/women/85.jpg"
})

const theme = useTheme()
const toggleTheme = () => {
    const value = theme.global.current.value.dark ? 'light' : 'dark'
    theme.change(value)
}
</script>
<style>
.wrap-text {
    white-space: normal !important;
    text-overflow: unset !important;
    overflow: visible !important;
}
</style>