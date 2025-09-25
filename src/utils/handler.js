import emitter from "../plugins/eventBus";

export const handlers = {
    add_transaction: () => {
        emitter.emit("openTransactionForm", {})
    },
    add_saving: () => {
        emitter.emit("openBudgetForm", {})
    },
    export_pdf: () => {
        // emitter.emit("openSavingForm", {})
    }
};