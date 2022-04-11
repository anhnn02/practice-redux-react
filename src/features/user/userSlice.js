import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "../../api/auth";
import { read } from "../../api/user";
import { toastr } from 'react-redux-toastr'

export const signup = createAsyncThunk(
    "user/signup",
    async (userData, { rejectWithValue }) => {
        console.log(userData)
        try {
            const { data } = await register(userData);
            toastr.success("User registered successfully");
            return data;
        } catch (error) {
            console.log(error)
            toastr.error( error.response.data.msg);
        }
    }
)

export const signin = createAsyncThunk(
    "user/signin",
    async (userData, { rejectWithValue }) => {
        try {
            const { data } = await login(userData);
            localStorage.setItem("user", JSON.stringify(data))
            return data;
        } catch (error) {
            toastr.error("Failed to login", error.response.data.message);
        }
    }
)

export const getUserInvoice = createAsyncThunk(
    "user/getUserInvoice",
    async (id) => {
        const { data } = await read(id);
        return data
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticate: false,
        current: [],
        value: [],
        settings: {}
    },
    extraReducers: (builder) => {
        builder.addCase(signup.fulfilled, (state, action) => {
            console.log(action);
        });
        builder.addCase(signin.fulfilled, (state, action) => {
            state.isAuthenticate = true;
            state.current = action.payload
        })
        builder.addCase(getUserInvoice.fulfilled, (state, action) => {
            state.isAuthenticate = true;
            state.value = action.payload
        })
    }
})

export default userSlice.reducer;