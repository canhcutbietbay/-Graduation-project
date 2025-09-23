<template>
    <v-row>
        <v-col cols="12">
            <OverviewFillter></OverviewFillter>
        </v-col>
        <v-col cols="12">
            <v-row>
                <v-col cols="12" md="4">
                    <sumaryCard :overview="overview"></sumaryCard>
                </v-col>
                <v-col cols="12" md="8">
                    <RecentTransactions></RecentTransactions>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" md="6">
            <chart title="Income vs Expense" :data="localOverview.incomeVsExpense" type="doughnut" />
        </v-col>
        <v-col cols="12" md="6">
            <chart title="Trend by Month" :data="localOverview.trendByMonth" type="line" />
        </v-col>
        <v-col cols="12" md="6">
            <chart title="Expense by Category" :data="localOverview.expenseByCategory" type="bar" />
        </v-col>
        <v-col cols="12" md="6">
            <chart title="By Account" :data="localOverview.byAccount" type="bar" />
        </v-col>

    </v-row>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import chart from '../components/common/chart.vue';
// import api from '../plugins/api';
import overview from '../mockDB/sumary'
import sumaryCard from '../components/overview/sumary-card.vue';
import OverviewFillter from '../components/overview/OverviewFillter.vue';
import RecentTransactions from '../components/overview/RecentTransactions.vue';

const localOverview = ref({})
onMounted(async () => {
    // overview.value = (await api.get('/overview')).data
    localOverview.value = overview
})

</script>

<style></style>