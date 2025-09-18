<template>
    <CategoryTable :categories="categories"> </CategoryTable>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import CategoryTable from '../components/categories/CategoryTable.vue'
import api from '../plugins/api'
import categories from '../mockDB/categories'


onMounted(async () => {
    // categories.value = (await api.get('/categories')).data
})
</script>

<style></style>