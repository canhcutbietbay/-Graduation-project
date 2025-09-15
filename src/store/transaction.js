import { defineStore } from 'pinia'
import axios from '../plugins/api' // file cấu hình axios


export const useTransactionStore = defineStore('transaction', {
    state: () => ({
        transactions: [],
    }),
    actions: {
        async fetchTransactions(filters = {}) {
            const res = await axios.get('/transactions', { params: filters })
            this.transactions = res.data
        },
        async addTransaction(payload) {
            const res = await axios.post('/transactions', payload)
            this.transactions.push(res.data)
        },
        async deleteTransaction(id) {
            await axios.delete(`/transactions/${id}`)
            this.transactions = this.transactions.filter(t => t.id !== id)
        },
    },
})
