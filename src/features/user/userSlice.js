import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "../../api/auth";
import { toastr } from 'react-redux-toastr'

export const signup = createAsyncThunk(
    "user/signup",
    async (userData, { rejectWithValue }) => {
        console.log(userData)
        try {
            const { data } = await register(userData);
            toastr.success("Success", "User registered successfully");
            return data;
        } catch (error) {
            console.log("error ne", error)
            toastr.error("Register failed", error.response.data.msg);
        }
    }
)

export const signin = createAsyncThunk(
    "user/signin",
    async (userData, { rejectWithValue }) => {
        try {
            const { data } = await login(userData);
            localStorage.setItem("user", JSON.stringify(data))
            toastr.success("Success ", "Login successfully");
            return data;
        } catch (error) {
            // toastr.error("Đăng nhập thất bại", error.response.data.message);
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticate: false,
        current: [],
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
    }
})

export default userSlice.reducer;