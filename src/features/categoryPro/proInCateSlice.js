import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { read, relatedProduct as relatedPro } from "../../api/categoryProduct";

export const getProductInCategory = createAsyncThunk(
    "category/getProductInCategory",
    async (idCate, thunkAPI) => {
        const { data } = await read(idCate);
        return data
    }
)
export const relatedProduct = createAsyncThunk(
    "category/relatedProduct",
    async (id, thunkAPI) => {
        try {
            const { data } = await relatedPro(id.idCate, id.idPro);
            return data
        } catch (error) {
            console.log(error)
        }
        
    }
)


const proInCateSlice = createSlice({
    name: "proInCate",
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(getProductInCategory.fulfilled, (state, action) => {
            state.value = action.payload
        })
        
        builder.addCase(relatedProduct.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(relatedProduct.rejected, (state, action) => {
            console.log("action", action)
        })
    }
})

export default proInCateSlice.reducer