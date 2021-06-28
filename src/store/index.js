import { configureStore } from '@reduxjs/toolkit'
import Authentication from './slices/Authentication'
import SubjectSlice from './slices/Subjects'

const store = configureStore({
  reducer: {
    auth: Authentication.reducer,
    subjects: SubjectSlice.reducer,
  },
})

export const authActions = Authentication.actions
export const articlesActions = SubjectSlice.actions
export default store
