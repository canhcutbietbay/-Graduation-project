<template>
    <v-card>
        <v-row class="d-flex justify-center align-center border-md rounded-xl">
            <v-col cols="auto">
                <h3>Balance: </h3>
            </v-col>
            <v-col cols="auto">
                <p>{{ formatPriceNoSuffix(props.overview.balanceKPI?.value) }} {{ props.overview.balanceKPI?.currency }}
                </p>
            </v-col>
            <v-col cols="auto"
                :class="props.overview.balanceKPI?.trend === 'up' ? ' text-green-darken-2' : ' text-red-darken-2'">
                <v-icon>
                    {{ props.overview.balanceKPI?.trend === 'up' ? 'mdi-trending-up' : 'mdi-trending-down' }}
                </v-icon>
                {{ formatPriceNoSuffix(props.overview.balanceKPI?.change) }} {{ props.overview.balanceKPI?.currency }}
            </v-col>
        </v-row>
    </v-card>
</template>

<script setup>
import { formatPriceNoSuffix } from '../../utils/format'

const props = defineProps(['overview'])
</script>

<style></style>