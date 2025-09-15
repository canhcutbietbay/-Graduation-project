<template>
    <v-app>
        <!-- Navbar -->
        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon @click="drawer = !drawer" />
            <v-toolbar-title>Finance App</v-toolbar-title>
            <v-spacer />
            <v-btn icon @click="toggleTheme">
                <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
        </v-app-bar>

        <!-- Sidebar -->
        <v-navigation-drawer v-model="drawer" app>
            <v-list>
                <v-list-item v-for="item in menuItems" :key="item.title" :to="item.to" link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
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
    { title: 'Dashboard', icon: 'mdi-view-dashboard', to: { name: 'Dashboard' } },
    { title: 'Transactions', icon: 'mdi-cash-multiple', to: { name: 'Transactions' } },
    { title: 'Profile', icon: 'mdi-account', to: { name: 'Profile' } },
]

const theme = useTheme()
const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
