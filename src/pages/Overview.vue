<template>
    <!-- <div>
        <h3>Balance</h3>
        <p>{{ overview.balanceKPI?.value }} {{ overview.balanceKPI?.currency }}</p>
        <small>
            {{ overview.balanceKPI?.trend === 'up' ? '⬆' : '⬇' }}
            {{ overview.balanceKPI?.change }}
        </small>
    </div> -->
    <v-row>
        <v-col cols="6">
            <chart title="Income vs Expense" :data="overview.incomeVsExpense" type="doughnut" />
        </v-col>
        <v-col cols="6">
            <chart title="Trend by Month" :data="overview.trendByMonth" type="line" />
        </v-col>
        <v-col cols="6">
            <chart title="Expense by Category" :data="overview.expenseByCategory" type="bar" />
        </v-col>
        <v-col cols="6">
            <chart title="By Account" :data="overview.byAccount" type="bar" />
        </v-col>

    </v-row>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import chart from '../components/common/chart.vue';
import api from '../plugins/api';
const overview = ref({})

onMounted(async () => {
    overview.value = (await api.get('/overview')).data

})


</script>

<style></style>