import { list, read, create, remove, update } from "../../api/product";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const listProduct = createAsyncThunk(
    "product/listProduct",
    async () => {
        const { data } = await list()
        return data
    }
)
export const getProduct = createAsyncThunk(
    "product/getProduct",
    async (id) => {
        const { data } = await read(id)
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
export const removeProducts = createAsyncThunk(
    "product/removeProducts",
    async (id) => {
        const { data } = await remove(id);
        // toastr.success("Thông Báo", "Xóa sản phẩm thành công")
        return data
    }
)
export const updateProduct = createAsyncThunk(
    "product/updateProducts",
    async (dataProduct) => {
        const { data } = await update(dataProduct);
        // toastr.success("Thông Báo", "Cập nhật sản phẩm thành công")
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
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.value = action.payload
        })
        // builder.addCase(addProduct.rejected, (state, action) => {
        //     console.log(action)
        //     state.value.push(action.payload)
        // })
        builder.addCase(removeProducts.fulfilled, (state, action) => {
            state.value = state.value.filter(item => item._id !== action.payload._id)
        })
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.value = state.value?.map(item => item._id === action.payload._id ? action.payload : item)
        })
    }
    
})

export default productSlice.reducer