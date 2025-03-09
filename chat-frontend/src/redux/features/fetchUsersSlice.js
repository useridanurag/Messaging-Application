import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from "js-cookie"
import axios from "../../axios";
import STATUS from "../status";

// Thunk middleware fetch All users wtih backend API
export const fetchUsers = createAsyncThunk("users/fetch", async () => {
    const token = Cookies.get("jwt")
    const response = await axios.get("/user/allUser", {
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const data = response.data;
    return data;
})

const fetchUsersSlice = createSlice({
    name: "allUsers",
    initialState: {
        message: "",
        users: [],
        status: STATUS.IDLE,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.status = STATUS.LOADING;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.message = action.payload.message;
                state.users = action.payload.users;
                state.status = STATUS.IDLE;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = STATUS.ERROR;
            })
    }
});
export default fetchUsersSlice.reducer;