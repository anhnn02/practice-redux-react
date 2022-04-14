import { list, read, create, remove, update, filterPage, filterProduct } from "../../api/product";

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
export const getProductComment = createAsyncThunk(
    "product/getProductComment",
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
        return data
    }
)
export const updateProduct = createAsyncThunk(
    "product/updateProducts",
    async (dataProduct) => {
        const { data } = await update(dataProduct);
        return data
    }
)

export const getProductInCategory = createAsyncThunk(
    "category/getProductInCategory",
    async (idCate, thunkAPI) => {
        const { data } = await read(idCate);
        return data
    }
)

export const getProductPage = createAsyncThunk(
    "product/getProductPage",
    async (numberPage, thunkAPI) => {
        const { data } = await filterPage(numberPage);
        return data
    }
)

export const getProductFilter = createAsyncThunk(
    "product/getProductFilter",
    async (filter, thunkAPI) => {
        const { data } = await filterProduct(filter.page, filter.order);
        return data
    }
)
const productSlice = createSlice({
    name: "product",
    initialState: {
        value: [],  
        productComment: [],
        valueLimitPage: [],
        status: null
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
        builder.addCase(removeProducts.fulfilled, (state, action) => {
            state.value = state.value.filter(item => item._id !== action.payload._id)
        })
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.value = state.value?.map(item => item._id === action.payload._id ? action.payload : item)
        })
        builder.addCase(getProductInCategory.fulfilled, (state, action) => {
            state.proInCate = action.payload
        })
        builder.addCase(getProductPage.fulfilled, (state, action) => {
            state.valueLimitPage = action.payload
        })
        builder.addCase(getProductFilter.fulfilled, (state, action) => {
            state.valueLimitPage = action.payload
        })
        builder.addCase(getProductComment.fulfilled, (state, action) => {
            state.productComment = action.payload
        })

        

    }
    
})

export default productSlice.reducer