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

        <div class="mt-2">
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
    </v-card>

</template>

<script setup>
import { computed } from 'vue'
import { formatPriceNoSuffix } from '../../utils/format'
import { useDisplay } from 'vuetify'

const percentProcess = computed(() => ((props.overview.balanceKPI.expense / props.overview.balanceKPI.income) * 100).toFixed(1))
const { lgAndDown } = useDisplay()

const props = defineProps(['overview'])
</script>

<style></style>