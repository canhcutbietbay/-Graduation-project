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
                    Giao dịch gần đây
                </v-toolbar-title>
                <v-btn class="mr-2" rounded="lg" border variant="elevated" color="primary" @click="exportPDF">
                    <v-icon class="">mdi-file-export-outline</v-icon>
                </v-btn>
                <json-excel :data="transactions" :fields="json_fields" worksheet="Các giao dịch gần đây" type="xlsx"
                    name="data.xlsx">
                    <v-btn class="mr-2" rounded="lg" border variant="elevated" color="primary">
                        <v-icon class="">mdi-microsoft-excel</v-icon>
                    </v-btn>
                </json-excel>
                <v-btn class="me-2" rounded="lg" border variant="text" color="primary" @click="addNewTransaction">
                    <v-icon>mdi-plus</v-icon>
                    <span v-if="!mobile">Thêm mới giao dịch</span>
                </v-btn>
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
import { useDisplay } from 'vuetify'
import JsonExcel from "vue-json-excel3";
import pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

const { mobile } = useDisplay()
const props = defineProps(['transactions'])


const json_fields = ref({
    "Ngày giao dịch": {
        field: "date",
        callback: (value) => {
            return formatVietnamDate(value)
        }
    },
    "Loại giao dịch": {
        field: "type",
        callback: (value) => {
            return getType(value)
        }
    },
    "Số tiền": "amount",
    "Nhóm": "category",
    "Tài khoản": "account",
    "Ghi chú": "description",
})

const typeMap = ref({
    income: 'Thu nhập',
    expense: 'Chi tiêu'
})

const getType = (type) => typeMap.value[type] || ''

const tableTransactions = {
    headerRows: 1,
    widths: ['*', '*', '*', '*', '*', '*'],
    body: [
        [
            { text: 'Ngày giao dịch', style: 'tableHeader' },
            { text: 'Loại giao dịch', style: 'tableHeader' },
            { text: 'Số tiền', style: 'tableHeader' },
            { text: 'Nhóm', style: 'tableHeader' },
            { text: 'Tài khoản', style: 'tableHeader' },
            { text: 'Ghi chú', style: 'tableHeader' },
        ],
        ...props.transactions.sort((a, b) => (a.date < b.date ? 1 : -1)).map(item => [
            { text: formatVietnamDate(item.date), style: 'tableCellCenter' },
            { text: getType(item.type), style: 'tableCellCenter' },
            { text: formatPrice(item.amount), style: 'tableCellRight' },
            { text: item.category, style: 'tableCellCenter' },
            { text: item.account, style: 'tableCellCenter' },
            { text: item.description, style: 'tableCellLeft' },
        ])
    ]
};

const docDefinition = {
    pageOrientation: 'landscape',
    content: [
        { text: 'CÁC GIAO DỊCH GẦN ĐÂY', style: 'title' },
        { table: tableTransactions }
    ],
    styles: {
        title: { fontSize: 18, bold: true, alignment: 'center', margin: [0, 10, 0, 5] },
        tableHeader: { bold: true, fontSize: 12, alignment: 'center' },
        tableCellLeft: { alignment: 'left' },
        tableCellCenter: { alignment: 'center' },
        tableCellRight: { alignment: 'right' }
    }
};

const exportPDF = () => {
    pdfMake.createPdf(docDefinition, undefined, undefined, pdfFonts).download("Các giao dịch gần đây.pdf");
}


const search = ref(null)
const isOpen = ref(false)
const selectedItem = ref(null)

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