import { create } from "../../api/product";
import { list } from "../../api/product";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const listProduct = createAsyncThunk(
    "product/listProduct",
    async () => {
        const { data } = await list()
        return data
    }
)
export const addProduct = createAsyncThunk(
    "product/addProduct",
    async (dataProduct) => {
        const { data } = await create(dataProduct)
        return data
    }
)

const productSlice = createSlice({
    name: "product",
    initialState: {
        value: []
    },
    extraReducers: (builder) => { 
        builder.addCase(listProduct.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.value.push(action.payload)
        })
        builder.addCase(addProduct.rejected, (state, action) => {
            console.log(action)
            state.value.push(action.payload)
        })
    }
    
})

export default productSlice.reducer