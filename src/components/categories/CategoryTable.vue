<template>
    <v-text-field class="mb-4" v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined"
        hide-details single-line></v-text-field>
    <v-data-table :headers="headers" :items="categories" height="600" item-value="name" fixed-header :search="search"
        :sort-by="[{ key: 'date', order: 'desc' }]">
        <!-- add -->
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>
                    <v-icon icon="mdi-book-multiple" size="x-small" start></v-icon>
                    Nhóm
                </v-toolbar-title>

                <v-btn class="me-2" prepend-icon="mdi-plus" rounded="lg" text="Thêm mới nhóm" border variant="text"
                    color="primary" @click="addNewCategory"></v-btn>
            </v-toolbar>
        </template>
        <!-- action  -->
        <template v-slot:item.actions="{ item }">
            <div class="d-flex ga-2 justify-center">
                <v-icon color="default" icon="mdi-pencil" size="small" @click="editCategory(item)"></v-icon>

                <v-icon color="error" icon="mdi-delete" size="small" @click="deleteCategory(item)"></v-icon>
            </div>
        </template>
    </v-data-table>
    <CategoryForm v-model:isOpen="isOpen" v-model:item="selectedItem"></CategoryForm>
</template>

<script setup>
import { ref } from 'vue'
import CategoryForm from './CategoryForm.vue'
import swal from '../../plugins/swal'
const props = defineProps(['categories'])

const search = ref(null)
const isOpen = ref(false)
const selectedItem = ref(null)

const headers = [
    { title: 'Tên hiển thị', align: 'start', key: 'name' },
    { title: 'Ghi chú', align: 'start', key: 'description' },
    { title: 'Hành động', key: 'actions', align: 'center', sortable: false, width: '200px' },
]

const addNewCategory = () => {
    isOpen.value = true
    selectedItem.value = null
}
const editCategory = (item) => {
    isOpen.value = true
    selectedItem.value = item
}
const deleteCategory = (item) => {
    swal({
        title: "Xác nhận xoá nhóm",
        text: `${item.id} - ${item.description}`,
        icon: "info",
    });
}
</script>

<style></style>