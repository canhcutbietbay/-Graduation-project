<template>
    <div class="d-flex justify-center align-center">
        <canvas ref="chartCanvas"></canvas>
    </div>
</template>

<script setup>
import { Chart } from "chart.js/auto";
import { ref, watch } from "vue";

const chartCanvas = ref(null);
const chartInstance = ref(null);

const props = defineProps({
    data: Object,
    title: String,
    type: String
});

function renderChart(data) {
    if (!chartCanvas.value) return;

    if (chartInstance.value) {
        chartInstance.value.destroy();
    }

    chartInstance.value = new Chart(chartCanvas.value, {
        type: props.type,
        data,
        options: {
            responsive: true,
            plugins: {
                legend: { position: "top" },
                title: { display: true, text: props.title }
            }
        }
    });
}

watch(
    () => props.data,
    (newData) => {
        if (newData && newData.labels && newData.datasets) {
            renderChart(newData);
        }
    },
    { deep: true, immediate: true }
);
</script>
