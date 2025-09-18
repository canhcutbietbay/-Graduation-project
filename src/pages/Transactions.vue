<template>
    <TransactionFilter></TransactionFilter>
    <TransactionTable :transactions="transactions"> </TransactionTable>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import TransactionTable from '../components/transactions/TransactionTable.vue'
import TransactionFilter from '../components/transactions/TransactionFilter.vue'
import api from '../plugins/api'

const transactions = ref([])

onMounted(async () => {
    transactions.value = (await api.get('/transactions')).data
})
</script>

<style></style>