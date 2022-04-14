import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import { toastr } from "react-redux-toastr";
import { create, list, remove, update } from "../../api/categoryProduct"

export const listCategory = createAsyncThunk(
    "category/getCategory",
    async () => {
        const { data } = await list();
        return data
    }
)

export const addCategory = createAsyncThunk(
    "category/addCategory",
    async (category) => {
        const { data } = await create(category);
        return data
    }
)

export const updateCategory = createAsyncThunk(
    "category/updateCategory",
    async (category) => {
        const { data } = await update(category);
        return data
    }
)

export const removeCategory = createAsyncThunk(
    "category/removeCategory",
    async (id) => {
        const { data } = await remove(id);
        return data
    }
)


const categorySlice = createSlice({
    name: "category",
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(listCategory.fulfilled, (state, action) => {
            state.value = action.payload
        });
        builder.addCase(removeCategory.fulfilled, (state, action) => {
            state.value = state.value.filter(item => item._id !== action.payload._id)
        });
        builder.addCase(addCategory.fulfilled, (state, action) => {
            state.value.push(action.payload)
        });
        builder.addCase(updateCategory.fulfilled, (state, action) => {
            state.value = state.value.map(item => item._id === action.payload._id ? action.payload : item)
        });
        builder.addCase(updateCategory.rejected, (state, action) => {
            console.log("cate", action)
        });
    }
})

export default categorySlice.reducer