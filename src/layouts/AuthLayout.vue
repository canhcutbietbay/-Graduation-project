<template>
    <v-app>
        <v-main class="d-flex align-center justify-center " style="min-height: 100vh;">
            <v-container class="pa-6" max-width="400">
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
// Layout chỉ render router-view (Login/Register)
</script>
