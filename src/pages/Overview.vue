<template>
    <v-row>
        <v-col cols="12">
            <v-row>
                <v-col cols="12" md="6">
                    <sumaryCard :overview="overview"></sumaryCard>
                </v-col>
                <!-- <v-col cols="12" md="6">
                    <RecentTransactions></RecentTransactions>
                </v-col> -->
                <v-col cols="12" md="6">
                    <BudgetCard></BudgetCard>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12">
            <OverviewFillter></OverviewFillter>
            <v-select :items="typeArray" item-title="label" item-value="value" variant="outlined" density="compact"
                label="Loại biểu đồ" v-model="typeChart" :rules="ruleRequires"></v-select>
        </v-col>
        <v-col v-if="typeChart == 1" cols="12">
            <chart title="Income vs Expense" :data="localOverview.incomeVsExpense" type="doughnut" />
        </v-col>
        <v-col v-if="typeChart == 2" cols="12">
            <chart title="Trend by Month" :data="localOverview.trendByMonth" type="line" />
        </v-col>
        <v-col v-if="typeChart == 3" cols="12">
            <chart title="Expense by Category" :data="localOverview.expenseByCategory" type="bar" />
        </v-col>
        <v-col v-if="typeChart == 4" cols="12">
            <chart title="By Account" :data="localOverview.byAccount" type="bar" />
        </v-col>
    </v-row>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import chart from '../components/common/chart.vue';
// import api from '../plugins/api';
import overview from '../mockDB/sumary'
import sumaryCard from '../components/overview/sumary-card.vue';
import OverviewFillter from '../components/overview/OverviewFillter.vue';
import RecentTransactions from '../components/overview/RecentTransactions.vue';
import BudgetCard from '../components/overview/BudgetCard.vue';

const ruleRequires = ref([
    v => !!v || 'Trường này là bắt buộc'
])

const typeArray = ref([
    { label: 'Thu nhập / Chi tiêu', value: 1 },
    { label: 'Trending theo tháng', value: 2 },
    { label: 'Chi tiêu theo nhóm', value: 3 },
    { label: 'Thống kê theo nhóm tài khoản', value: 4 },
])

const localOverview = ref({})
const typeChart = ref(1)

onMounted(async () => {
    // overview.value = (await api.get('/overview')).data
    localOverview.value = overview
})

watch(typeChart, (newVal) => {

})



</script>

<style></style>