<template>
    <v-card class="">
        <v-card-title class="pb-0">
            <span class="text-h6 font-weight-bold">
                Giao dịch gần đây
            </span>
        </v-card-title>
        <v-card-text>
            <v-list>
                <v-list-item v-for="(transaction, index) in processRecentTransactions" :key="index">
                    <div class="pt-0">
                        <h3>{{ transaction.type }}</h3>
                        <p>{{ transaction.description }}</p>
                    </div>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import overviewSumary from '../../mockDB/overview-sumary';
import { formatVietnamDate, formatPriceNoSuffix } from '../../utils/format';
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