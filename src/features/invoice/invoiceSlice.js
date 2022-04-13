import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import { toastr } from "react-redux-toastr";
import { list, read, update } from "../../api/invoice"

export const listInvoice = createAsyncThunk(
    "invoice/getListInvoice",
    async () => {
        const { data } = await list();
        return data
    }
)
export const getInvoiceDetail = createAsyncThunk(
    "invoice/getInvoiceDetail",
    async (id) => {
        const { data } = await read(id);
        return data
    }
    
)
export const updateStatusInvoice = createAsyncThunk(
    "invoice/updateStatusInvoice",
    async (dataInvoice) => {
        const { data } = await update(dataInvoice.id, dataInvoice.status);
        return data
    }
    
)

const invoiceSlice = createSlice({
    name: "invoice",
    initialState: {
        value: [],
        detailInvoice: []
    },
    extraReducers: (builder) => {
        builder.addCase(listInvoice.fulfilled, (state, action) => {
            state.value = action.payload
        });
        builder.addCase(getInvoiceDetail.fulfilled, (state, action) => {
            state.detailInvoice = action.payload
        });
        builder.addCase(updateStatusInvoice.fulfilled, (state, action) => {
            state.value = action.payload
        });
    }
})

export default invoiceSlice.reducer