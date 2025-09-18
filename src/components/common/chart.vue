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

// Hàm render chart
function renderChart(data) {
    if (!chartCanvas.value) return;

    // Nếu chart cũ tồn tại -> huỷ trước khi tạo mới
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

// Watch để chỉ vẽ khi data từ parent có sẵn
watch(
    () => props.data,
    (newData) => {
        if (newData && newData.labels && newData.datasets) {
            renderChart(newData);
        }
    },
    { deep: true, immediate: true } // immediate = render ngay nếu data có sẵn
);
</script>
