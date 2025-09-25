<template>
    <v-card class="border-md rounded-xl elevation-4 w-100 h-100">
        <v-card-title class="pb-0">
            <span class="text-h6 font-weight-bold">
                Tiết kiệm / Chi tiêu
            </span>
            <v-row class="mb-2 mt-1 ">
                <v-col cols="12">
                    <v-select v-model="budgetType" :items="budgetArray" item-title="label" item-value="value"
                        hide-details="true" label="Loại ngân sách" variant="outlined" />
                </v-col>
                <v-col cols=" 12" v-if="budgetType != null">
                    <chart :title="getBudgetLabel(budgetType)" :data="chartData" type="doughnut" />
                </v-col>
            </v-row>
        </v-card-title>
        <v-card-text>

        </v-card-text>
    </v-card>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue';
import budgetOverview from '../../mockDB/budget-overview';
import chart from '../common/chart.vue'

const budgetArray = ref([
    { label: 'Food & Drink', value: 1 },
    { label: 'Transport', value: 2 },
    { label: 'Shopping', value: 3 },
    { label: 'Emergency Fund', value: 4 },
    { label: 'Travel Fund', value: 5 },
])
const budgetType = ref(1)

const getBudgetLabel = (value) => {
    const budget = budgetArray.value.find(item => item.value === value);
    return budget ? budget.label : null; // trả về null nếu không tìm thấy
}

const chartData = computed(() => {
    return budgetOverview[getBudgetLabel(budgetType.value)]
})


</script>

<style></style>