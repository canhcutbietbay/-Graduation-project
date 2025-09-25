<template>
    <v-dialog v-model="props.isOpen" max-width="800px">
        <v-card>
            <v-card-title>{{ title }}</v-card-title>
            <v-card-text>
                <v-form ref="form" v-model="valid">
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-text-field variant="outlined" density="compact" label="Tên hiển thị"
                                v-model="localItem.name" :rules="ruleRequires"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field variant="outlined" density="compact" label="Ghi chú"
                                v-model="localItem.description" :rules="ruleRequires"></v-text-field>
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
import swal from '../../plugins/swal';

const form = ref(null)
const valid = ref(false)

const localItem = ref({})

const props = defineProps({
    isOpen: Boolean,
    item: Object,
});

const ruleRequires = ref([
    v => !!v || 'Trường này là bắt buộc'
])

const emit = defineEmits(["update:isOpen", "update:item"]);

watch(props, () => {
    localItem.value = props.item == null ? {} : { ...props.item }
})

const closeDialog = () => {
    emit("update:isOpen", false)
    emit("update:item", null)
}
const isAddNew = computed(() => {
    return props.item === null
})

const title = computed(() => {
    return isAddNew.value ? "Thêm mới tài khoản" : "Chỉnh sửa tài khoản"
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
    closeDialog()
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