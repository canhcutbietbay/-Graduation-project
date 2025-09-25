<template>
    <BudgetTable :budget="budget"> </BudgetTable>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import BudgetTable from '../components/budget/BudgetTable.vue'
import api from '../plugins/api'
import budget from '../mockDB/budget'

onMounted(async () => {
    // categories.value = (await api.get('/categories')).data
})
</script>

<style></style>