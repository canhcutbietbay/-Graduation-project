<template>
    <v-text-field class="mb-4" v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined"
        hide-details single-line></v-text-field>
    <v-data-table :headers="headers" :items="transactions" height="600" item-value="name" fixed-header :search="search"
        :sort-by="[{ key: 'date', order: 'desc' }]">
        <!-- add -->
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>
                    <v-icon icon="mdi-history" size="x-small" start></v-icon>
                    Các giao dịch gần đây
                </v-toolbar-title>

                <v-btn class="me-2" prepend-icon="mdi-plus" rounded="lg" text="Thêm mới giao dịch" border variant="text"
                    color="primary" @click="addNewTransaction"></v-btn>
            </v-toolbar>
        </template>
        <!-- format -->
        <template #item.date="{ value }">
            {{ formatVietnamDate(value) }}
        </template>
        <template #item.type="{ value }">
            {{ getType(value) }}
        </template>
        <!-- action  -->
        <template v-slot:item.actions="{ item }">
            <div class="d-flex ga-2 justify-center">
                <v-icon color="default" icon="mdi-pencil" size="small" @click="editTransaction(item)"></v-icon>

                <v-icon color="error" icon="mdi-delete" size="small" @click="deleteTransaction(item)"></v-icon>
            </div>
        </template>
    </v-data-table>
    <TransactionForm v-model:isOpen="isOpen" v-model:item="selectedItem"></TransactionForm>
</template>

<script setup>
import { ref } from 'vue'
import { formatPrice, formatVietnamDate } from '../../utils/format'
import TransactionForm from './TransactionForm.vue'
import swal from '../../plugins/swal'
const props = defineProps(['transactions'])

const search = ref(null)
const isOpen = ref(false)
const selectedItem = ref(null)

const typeMap = ref({
    income: 'Thu nhập',
    expense: 'Chi tiêu'
})

const getType = (type) => typeMap.value[type] || ''

const headers = [
    { title: 'Ngày giao dịch', align: 'center', key: 'date', },
    { title: 'Loại giao dịch', align: 'center', key: 'type' },
    { title: 'Số tiền', align: 'end', key: 'amount', value: item => formatPrice(item.amount) },
    { title: 'Nhóm', align: 'end', key: 'category' },
    { title: 'Ghi chú', align: 'center', key: 'description' },
    { title: 'Tài khoản', align: 'end', key: 'account' },
    { title: 'Hành động', key: 'actions', align: 'center', sortable: false, width: '200px' },
]


const addNewTransaction = () => {
    isOpen.value = true
    selectedItem.value = null
}
const editTransaction = (item) => {
    isOpen.value = true
    selectedItem.value = item
}
const deleteTransaction = (item) => {
    swal({
        title: "Xác nhận xoá giao dịch",
        text: `${item.id} - ${item.description}`,
        icon: "info",
    });
}
</script>

<style></style>