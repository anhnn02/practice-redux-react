import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { search } from "../../api/product";

export const getProductSearch = createAsyncThunk(
    "productSearch/getProductSearch",
    async (keyword, thunkAPI) => {
        const { data } = await search(keyword);
        return data
    }
)

const productSearchSlice = createSlice({
    name: "productSearch",
    initialState: {
        value: [
        ]
    },
    extraReducers: (builder) => {
        builder.addCase(getProductSearch.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export default productSearchSlice.reducer

