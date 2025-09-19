<template>
    <v-app>
        <!-- Navbar -->
        <v-app-bar app color="primary" dark class="d-flex justify-space-between">
            <v-app-bar-nav-icon v-if="!mobile" @click="drawer = !drawer" />
            <v-toolbar-title class="md:text-h4" style="font-size: 16px;">QUẢN LÍ CHI TIÊU CÁ NHÂN</v-toolbar-title>
            <v-btn icon @click="toggleTheme">
                <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
        </v-app-bar>
        <div v-if="!mobile">
            <!-- Sidebar -->
            <v-navigation-drawer v-model="drawer" app>
                <v-list>
                    <v-list-item :prepend-avatar="user.avatar" :subtitle="user.email" :title="user.name"
                        :to="{ name: 'Profile' }"></v-list-item>
                </v-list>

                <v-list>
                    <v-list-item v-for="item in menuItems" :key="item.title" :to="item.to" :prepend-icon="item.icon"
                        link color="primary" exact>
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
        </div>
        <div v-else>
            <v-main>
                <v-container class="pa-4">
                    <router-view />
                </v-container>
            </v-main>
            <v-container>

                <v-bottom-navigation v-model="value" color="primary" grow mandatory app
                    style="overflow-x: auto !important; scrollbar-width: thin;">
                    <v-btn v-for="item in menuItems" @click="navigateTo(item.to)">
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-btn>
                    <v-btn @click="navigateTo({ name: 'Profile' })">
                        <v-avatar size="28">
                            <v-img :src="user.avatar" alt="Avatar"></v-img>
                        </v-avatar>
                    </v-btn>
                </v-bottom-navigation>
            </v-container>
        </div>

    </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme, useDisplay } from 'vuetify'
import user from '../mockDB/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const { mobile } = useDisplay()

const drawer = ref(true)
const value = ref(0)

const menuItems = [
    { title: 'TỔNG QUAN', icon: 'mdi-view-dashboard', to: { name: 'Overview' } },
    { title: 'QUẢN LÍ GIAO DỊCH', icon: 'mdi-cash-multiple', to: { name: 'Transactions' } },
    { title: 'QUẢN LÍ NHÓM', icon: 'mdi-shape', to: { name: 'Categories' } },
    { title: 'QUẢN LÍ TÀI KHOẢN', icon: 'mdi-account-cog', to: { name: 'Accounts' } },
    { title: 'CHỨC NĂNG AI', icon: 'mdi-robot-outline', to: { name: 'AiFunction' } },
]

const theme = useTheme()
const toggleTheme = () => {
    const value = theme.global.current.value.dark ? 'light' : 'dark'
    theme.change(value)
}
const navigateTo = (to) => {
    router.push(to)
}
</script>
<style>
.wrap-text {
    white-space: normal !important;
    text-overflow: unset !important;
    overflow: visible !important;
}

.v-bottom-navigation__content {
    justify-content: left;
}
</style>