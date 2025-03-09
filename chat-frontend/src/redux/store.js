import { configureStore } from '@reduxjs/toolkit'
import fetchUsersReducer from "./features/fetchUsersSlice"

export const store = configureStore({
  reducer: {
    getUsers: fetchUsersReducer,
  },
})