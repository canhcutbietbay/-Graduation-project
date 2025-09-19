<template>
    <v-text-field class="mb-4" v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined"
        hide-details single-line></v-text-field>
    <v-data-table :headers="headers" :items="accounts" height="600" item-value="name" fixed-header :search="search"
        :sort-by="[{ key: 'date', order: 'desc' }]">
        <!-- add -->
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>
                    <v-icon icon="mdi-account-group" size="x-small" start></v-icon>
                    Tài khoản
                </v-toolbar-title>

                <v-btn class="me-2" rounded="lg" border variant="text" color="primary" @click="addNewAccount">
                    <v-icon>mdi-plus</v-icon>
                    <span v-if="!mobile">Thêm mới tài khoản</span>
                </v-btn>
            </v-toolbar>
        </template>
        <!-- action  -->
        <template v-slot:item.actions="{ item }">
            <div class="d-flex ga-2 justify-center">
                <v-icon color="default" icon="mdi-pencil" size="small" @click="editAccount(item)"></v-icon>

                <v-icon color="error" icon="mdi-delete" size="small" @click="deleteAccount(item)"></v-icon>
            </div>
        </template>
    </v-data-table>
    <AccountForm v-model:isOpen="isOpen" v-model:item="selectedItem"></AccountForm>
</template>

<script setup>
import { ref } from 'vue'
import AccountForm from './AccountForm.vue'
import swal from '../../plugins/swal'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()


const props = defineProps(['accounts'])

const search = ref(null)
const isOpen = ref(false)
const selectedItem = ref(null)

const headers = [
    { title: 'Tên hiển thị', align: 'start', key: 'name' },
    { title: 'Ghi chú', align: 'start', key: 'description' },
    { title: 'Hành động', key: 'actions', align: 'center', sortable: false, width: '200px' },
]

const addNewAccount = () => {
    isOpen.value = true
    selectedItem.value = null
}
const editAccount = (item) => {
    isOpen.value = true
    selectedItem.value = item
}
const deleteAccount = (item) => {
    swal({
        title: "Xác nhận xoá nhóm",
        text: `${item.id} - ${item.description}`,
        icon: "info",
    });
}
</script>

<style></style>