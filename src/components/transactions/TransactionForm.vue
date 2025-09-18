<template>
    <v-dialog v-model="props.isOpen" max-width="800px">
        <v-card>
            <v-card-title>{{ title }}</v-card-title>
            <v-card-text>
                <v-form ref="form" v-model="valid">
                    <v-row>
                        <v-col cols="6">
                            <datePick v-model="localItem.date" label="Ngày giao dịch" :rules="ruleRequires" />
                        </v-col>
                        <v-col cols="6">
                            <v-select :items="typeArray" item-title="title" item-value="value" variant="outlined"
                                density="compact" label="Loại giao dịch" v-model="localItem.type"
                                :rules="ruleRequires"></v-select>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field variant="outlined" density="compact" label="Số tiền" v-model="displayPrice"
                                type="text" suffix="VND" @keypress="(e) => !/[0-9]/.test(e.key) && e.preventDefault()"
                                :rules="ruleRequires"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-select :items="categories" item-title="name" item-value="id" variant="outlined"
                                density="compact" label="Nhóm" v-model="localItem.category"
                                :rules="ruleRequires"></v-select>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field variant="outlined" density="compact" label="Ghi chú"
                                v-model="localItem.description" :rules="ruleRequires"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-select :items="accounts" item-title="name" item-value="id" variant="outlined"
                                density="compact" label="Tài khoản" v-model="localItem.account"
                                :rules="ruleRequires"></v-select>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn variant="outlined" @click="closeDialog">Huỷ</v-btn>
                <v-btn v-if="!isAddNew" variant="outlined" @click="save">Lưu</v-btn>
                <v-btn v-else variant="outlined" @click="addNew">Thêm mới</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import datePick from "../common/date-pick.vue";
import swal from '../../plugins/swal';
import { formatPriceNoSuffix } from '../../utils/format';
import api from '../../plugins/api';

const form = ref(null)
const valid = ref(false)
const accounts = ref([])
const categories = ref([])

const localItem = ref({})

const typeArray = ref([
    { title: 'Thu nhập', value: 'income' },
    { title: 'Chi tiêu', value: 'expense' }
])

const props = defineProps({
    isOpen: Boolean,
    item: Object,
});

onMounted(async () => {
    accounts.value = await (await api.get('/accounts')).data
    categories.value = (await api.get('/categories')).data
})

const ruleRequires = ref([
    v => !!v || 'Trường này là bắt buộc'
])

const emit = defineEmits(["update:isOpen", "update:item"]);

watch(props, () => {
    localItem.value = props.item == null ? {} : { ...props.item }
})

const displayPrice = computed({
    get() {
        return formatPriceNoSuffix(parseInt(localItem.value.amount) || 0)
    },
    set(val) {
        localItem.value.amount = val.replace(/\D/g, "")
    }
})

const closeDialog = () => {
    emit("update:isOpen", false)
    emit("update:item", null)
}
const isAddNew = computed(() => {
    return props.item === null
})

const title = computed(() => {
    return isAddNew ? "Thêm mới giao dịch" : "Chỉnh sửa giao dịch"
})

const addNew = async () => {
    const valid = await form.value.validate()
    if (valid.valid) {
        console.log(localItem.value)
        swal({
            title: "Thêm mới thành công",
            icon: "success",
        });
    }
}

const save = () => {
    console.log(localItem.value)
    swal({
        title: "Chỉnh sửa thành công",
        icon: "success",
    });
    closeDialog()
}
</script>

<style></style>