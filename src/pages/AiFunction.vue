<template>
    <!-- <v-navigation-drawer permanent :rail="mobile">
        <template v-slot:prepend>
            <div class="pa-2" @click="createNewChat()">
                <v-btn class="justify-start">
                    <v-icon start>mdi-message-plus-outline</v-icon>
                    <span class="ml-2">Tạo đoạn chat mới</span>
                </v-btn>
            </div>
        </template>
<v-divider></v-divider>
<v-list density="compact" nav>
    <v-list-item v-for="(item) in chats" :key="item.id" @click="itemClick(item)" :title="item.title" />
</v-list>
</v-navigation-drawer> -->

    <v-container v-if="loading" class="d-flex justify-center align-center">
        <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
    </v-container>

    <v-container class="h-100 w-100 d-flex flex-column" v-else>
        <v-row v-for="(chat, index) in localChats" :key="chat.id">
            <v-col cols="12" class="d-flex justify-end">
                <v-chip rounded="xl" label>{{ chat.question }}</v-chip>
            </v-col>
            <v-col cols="12" class="d-flex">
                <div style="white-space: pre-wrap;">
                    {{ index === localChats.length - 1 && chat.displayedResponse !== undefined
                        ? chat.displayedResponse
                        : chat.response }}
                </div>
            </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-container class="w-100 d-flex justify-center align-center chat-input pa-0">
            <v-textarea :loading="responeLoading" :disabled="responeLoading" rounded="xl" clearable
                variant="solo-filled" v-model="inputString" class="mt-3 " placeholder="Hỏi bất kỳ điều gì"
                @keydown.enter.exact.prevent="sendMessage">
                <template v-if="inputString" #append-inner>
                    <div class="d-flex justify-center align-center h-100">
                        <v-btn icon @click="sendMessage">
                            <v-icon>mdi-send</v-icon>
                        </v-btn>
                    </div>
                </template>
            </v-textarea>
        </v-container>

    </v-container>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import chats from '../mockDB/chats';
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

const router = useRouter()
const route = useRoute()

const localChats = ref(null)


const error = ref(null)
const inputString = ref('')
const responeLoading = ref(null)
const loading = ref(true)

const scrollToBottom = () => {
    setTimeout(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }, 100); // thử tăng lên 300 nếu chưa đủ
};

const fetchData = async (id) => {
    loading.value = true
    error.value = null
    try {
        // Gọi API
        const res = chats.find((chat) => chat.id === id)
        localChats.value = res.chats
        loading.value = false

        // if create new chat
        // if (store.state.isNewChat === true) {
        //     store.commit('setIsNewChat', false);
        //     // typing render
        //     nextTick(() => {
        //         startTypingResponse(chats.value[chats.value.length - 1])
        //         scrollToBottom()
        //     })
        // }
    } catch (err) {
        error.value = err
        alert(error.value)
        router.push({ name: 'home' })
    }
}
const startTypingResponse = (chat) => {
    let i = 0
    chat.displayedResponse = ''
    const interval = setInterval(() => {
        if (i < chat.response.length) {
            chat.displayedResponse += chat.response[i]
            i++
        } else {
            clearInterval(interval)
        }
    }, 30)
}

const handleRespone = () => {
    // call api get respone from RAG
    setTimeout(() => {
        localChats.value[localChats.value.length - 1].response = "Python là lựa chọn tốt cho người mới bắt đầu vì cú pháp đơn giản và tài liệu phong phú."
        responeLoading.value = false
        nextTick(() => {
            startTypingResponse(localChats.value[localChats.value.length - 1])
            scrollToBottom()
        })
    }, 2000)
}

const sendMessage = async () => {
    localChats.value.push({ question: inputString.value, response: "" })
    inputString.value = ""
    responeLoading.value = true
    scrollToBottom()
    // call api, wating for respone
    handleRespone()
}

onMounted(async () => {
    scrollToBottom()
    fetchData(route.params.id)
})

watch(
    () => route.params.id,
    async (newId) => {
        scrollToBottom()
        fetchData(newId)
    })
</script>
<style>
.chat-input {
    position: sticky;
    bottom: 0;
    z-index: 10;
    max-height: fit-content;
    min-height: 150px;
}
</style>