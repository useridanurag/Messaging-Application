import { createSlice } from '@reduxjs/toolkit';

const data = JSON.parse(localStorage.getItem("ChatData")) || null;
let initialState = false;
if (data) {
    initialState = data.user;
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUser: (state, action) => {
            state = action.payload;
            return state;
        },
        removeAuthUser: () => {
            return null;
        }
    }
});

export const { setAuthUser, removeAuthUser } = authSlice.actions;
export default authSlice.reducer;