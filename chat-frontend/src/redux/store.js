import { configureStore } from '@reduxjs/toolkit'
import fetchUsersReducer from "./features/fetchUsersSlice"
import authReducer from './features/authSlice'

export const store = configureStore({
  reducer: {
    getUsers: fetchUsersReducer,
    auth: authReducer,
  },
})