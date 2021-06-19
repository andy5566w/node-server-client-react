import { configureStore } from '@reduxjs/toolkit'
import Authentication from './slices/Authentication'

const store = configureStore({
  reducer: {
    auth: Authentication.reducer,
  },
})

export const authActions = Authentication.actions
export default store
