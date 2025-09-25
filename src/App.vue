<template>
  <router-view />
  <TransactionForm v-model:isOpen="isOpenTransactionForm" v-model:item="selectedItemTransactionForm"></TransactionForm>
  <BudgetForm v-model:isOpen="isOpenBudgetForm" v-model:item="selectedItemBudgetForm"></BudgetForm>
</template>

<script setup>
import TransactionForm from './components/transactions/TransactionForm.vue';
import BudgetForm from './components/budget/BudgetForm.vue';
import { ref, onMounted, onUnmounted } from 'vue'
import emitter from './plugins/eventBus';

const isOpenTransactionForm = ref(false)
const selectedItemTransactionForm = ref(null)

const isOpenBudgetForm = ref(false)
const selectedItemBudgetForm = ref(null)

function openTransactionFormHandler(payload) {
  isOpenTransactionForm.value = true
  selectedItemTransactionForm.value = payload
}
function openBudgetFormHandler(payload) {
  isOpenBudgetForm.value = true
  selectedItemBudgetForm.value = payload
}

onMounted(() => {
  emitter.on('openTransactionForm', openTransactionFormHandler);
  emitter.on('openBudgetForm', openBudgetFormHandler);
});

onUnmounted(() => {
  emitter.off('openTransactionForm', openTransactionFormHandler);
  emitter.off('openBudgetForm', openBudgetFormHandler);
});
</script>

<style></style>
