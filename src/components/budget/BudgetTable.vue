<template>
    <v-text-field class="mb-4" v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined"
        hide-details single-line></v-text-field>
    <v-data-table :headers="headers" :items="budget" height="600" item-value="name" fixed-header :search="search"
        :sort-by="[{ key: 'date', order: 'desc' }]">
        <!-- add -->
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>
                    <v-icon icon="mdi-book-multiple" size="x-small" start></v-icon>
                    Ngân sách
                </v-toolbar-title>

                <v-btn class="ma-2" rounded="lg" border variant="text" color="primary" @click="addNewBudget">
                    <v-icon>mdi-plus</v-icon>
                    <span v-if="!mobile">Thêm mới ngân sách</span>
                </v-btn>
            </v-toolbar>
        </template>
        <!-- action  -->
        <template #item.type="{ value }">
            {{ getType(value) }}
        </template>
        <template #item.amount="{ value }">
            {{ formatPrice(value) }}
        </template>
        <template v-slot:item.actions="{ item }">
            <div class="d-flex ga-2 justify-center">
                <v-icon color="default" icon="mdi-pencil" size="small" @click="editBudget(item)"></v-icon>
                <v-icon color="error" icon="mdi-delete" size="small" @click="deleteBudget(item)"></v-icon>
            </div>
        </template>
    </v-data-table>
</template>

<script setup>
import { ref } from 'vue'
import BudgetForm from './BudgetForm.vue'
import swal from '../../plugins/swal'
import { useDisplay } from 'vuetify'
import emitter from '../../plugins/eventBus';
import { formatPrice } from '../../utils/format';

const { mobile } = useDisplay()


const props = defineProps(['budget'])

const search = ref(null)
const typeMap = ref({
    saving: 'Tiết kiệm',
    expense: 'Chi tiêu'
})

const getType = (type) => typeMap.value[type] || ''

const headers = [
    { title: 'Tên hiển thị', align: 'start', key: 'name' },
    { title: 'Loại', align: 'center', key: 'type' },
    { title: 'Giới hạn / Mục tiêu', align: 'center', key: 'amount' },
    { title: 'Ghi chú', align: 'start', key: 'description', minWidth: '200px' },
    { title: 'Hành động', key: 'actions', align: 'center', sortable: false, width: '200px' },
]

const addNewBudget = () => {
    emitter.emit("openBudgetForm", null)
}
const editBudget = (item) => {
    emitter.emit("openBudgetForm", item)
}
const deleteBudget = (item) => {
    swal({
        title: "Xác nhận xoá nhóm",
        text: `${item.id} - ${item.description}`,
        icon: "info",
    });
}
</script>

<style></style>