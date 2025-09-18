<template>
    <v-container>
        <v-form ref="form" v-model="valid">
            <v-text-field class="mb-2" v-model="email" label="Email" :rules="emailRules" required variant="outlined"
                autocomplete="username" />

            <v-text-field class="mb-2" v-model="username" label="Username" :rules="userNameRules" required
                variant="outlined" autocomplete="username" />

            <v-text-field class="mb-2" v-model="password" label="Password" :type="show ? 'text' : 'password'"
                :append-inner-icon="show ? 'mdi-eye-off' : 'mdi-eye'" @click:append-inner="show = !show"
                :rules="passwordRules" required variant="outlined" autocomplete="current-password" />

            <div class="d-flex justify-end align-center">
                <v-btn :disabled="!valid" @click="handleLogin" color="primary">LOGIN</v-btn>
            </div>
        </v-form>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
const email = ref(null)
const password = ref(null)
const valid = ref(false)
const show = ref(false)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const form = ref(null)
const username = ref(null)

const emailRules = ref([
    v => !!v || 'Email is required',
    v => emailRegex.test(v) || 'Must be a valid email',
])
const userNameRules = ref([
    v => !!v || 'Username is required'
])
const passwordRules = ref([
    v => !!v || 'Password is required',
    v => v && v.length >= 8 || 'Min 8 characters',
    v => /[A-Z]/.test(v) || 'At least one uppercase letter',
    v => /[a-z]/.test(v) || 'At least one lowercase letter',
    v => /[0-9]/.test(v) || 'At least one number',
    v => /[!@#$%^&*(),.?":{}|<>]/.test(v) || 'At least one special character',
])

const handleLogin = () => {
    if (form.value.validate()) {
        console.log('ok', email.value, password.value);
    }
}
</script>

<style></style>