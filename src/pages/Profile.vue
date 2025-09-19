<template>
    <v-container>
        <v-row>
            <v-col cols="12" xl="4">
                <info :user="user"></info>
            </v-col>

            <v-col cols="12" xl="8">
                <accounts :user="user"></accounts>

            </v-col>
        </v-row>

        <v-row class="mt-4">
            <v-col cols="12" xl="4">
                <preferences :user="user"></preferences>

            </v-col>

            <v-col cols="12" xl="8">
                <stats :user="user"></stats>

            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import accounts from "../components/profile/accounts.vue";
import info from "../components/profile/info.vue";
import preferences from "../components/profile/preferences.vue";
import stats from "../components/profile/stats.vue";
import user from "../mockDB/user"

</script>
