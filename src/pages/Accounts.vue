<template>
    <AccountTable :accounts="accounts"> </AccountTable>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import AccountTable from '../components/accounts/AccountTable.vue'
import api from '../plugins/api'

const accounts = ref([])

onMounted(async () => {
    accounts.value = (await api.get('/accounts')).data
})
</script>

<style></style>