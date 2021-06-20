import { configureStore } from '@reduxjs/toolkit'
import Authentication from './slices/Authentication'
import ArticlesSlice from './slices/Articles'

const store = configureStore({
  reducer: {
    auth: Authentication.reducer,
    articles: ArticlesSlice.reducer,
  },
})

export const authActions = Authentication.actions
export const articlesActions = ArticlesSlice.actions
export default store
