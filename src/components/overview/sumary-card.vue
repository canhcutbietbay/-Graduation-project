<template>
    <v-card class="rounded-xl elevation-4 border-md pa-2 w-100 h-100">
        <v-row class="d-flex align-center justify-start ">
            <v-col cols="5" md="4">
                <span class="text-h6 font-weight-bold">
                    <v-icon color="primary">mdi-wallet</v-icon>
                    Số dư:
                </span>
            </v-col>
            <v-col cols="7" md="8" :class="lgAndDown ? 'd-flex flex-column ga-2' : 'd-flex flex-row ga-2'">
                {{ formatPriceNoSuffix(props.overview.balanceKPI.value) }} {{ props.overview.balanceKPI.currency }}
                <div :class="props.overview.balanceKPI.trend === 'up' ? 'text-green-darken-2' : ' text-red-darken-2'">
                    <v-icon size="16" :color="props.overview.balanceKPI.trend === 'up' ? 'green' : 'red'">
                        {{ props.overview.balanceKPI.trend === 'up' ? 'mdi-trending-up' : 'mdi-trending-down' }}
                    </v-icon>
                    {{ formatPriceNoSuffix(props.overview.balanceKPI.change) }} {{ props.overview.balanceKPI.currency }}
                </div>
            </v-col>
        </v-row>

        <div class="d-flex align-center justify-start ga-2">
            <span class="text-h6 font-weight-bold">
                <v-icon color="primary">mdi-cash-plus</v-icon>
                Thu nhập:
            </span>
            {{ formatPriceNoSuffix(props.overview.balanceKPI.income) }} {{ props.overview.balanceKPI.currency }}
        </div>

        <div class="d-flex align-center justify-start ga-2">
            <span class="text-h6 font-weight-bold">
                <v-icon color="primary">mdi-cash-minus</v-icon>
                Chi tiêu:
            </span>
            {{ formatPriceNoSuffix(props.overview.balanceKPI.expense) }} {{ props.overview.balanceKPI.currency }}
        </div>

        <div class="mt-2 mb-2">
            <div class="font-weight-bold mb-2">
                <span>Tỷ lệ chi tiêu: </span>
                <span>
                    {{
                        percentProcess
                    }}%
                </span>
            </div>
            <v-progress-linear :model-value="percentProcess" color="red" height="6" rounded />
        </div>

        <div class="mt-6">
            <span class="text-h6 font-weight-bold ">
                Giao dịch gần đây
            </span>
            <v-list>
                <v-list-item v-for="(transaction, index) in processRecentTransactions" :key="index">
                    <div class="pt-0">
                        <h3>{{ transaction.type }}</h3>
                        <p>{{ transaction.description }}</p>
                    </div>
                </v-list-item>
            </v-list>
        </div>
    </v-card>

</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { formatPriceNoSuffix, formatVietnamDate } from '../../utils/format'
import { useDisplay } from 'vuetify'
import overviewSumary from '../../mockDB/overview-sumary'

const percentProcess = computed(() => ((props.overview.balanceKPI.expense / props.overview.balanceKPI.income) * 100).toFixed(1))
const { lgAndDown } = useDisplay()

const props = defineProps(['overview'])

const recentTransactions = ref(null)

const typeMap = ref({
    income: 'Thu nhập',
    expense: 'Chi tiêu'
})

const processRecentTransactions = computed(() => {
    return recentTransactions.value?.map((transaction) => {
        return {
            type: typeMap.value[transaction.type] || '',
            description: `${formatVietnamDate(transaction.date)} - ${transaction.category} - ${formatPriceNoSuffix(transaction.amount)} ${transaction.currency} - ${transaction.description}`
        }
    })
})


onMounted(() => {
    recentTransactions.value = overviewSumary.recentTransactions
})
</script>

<style></style>