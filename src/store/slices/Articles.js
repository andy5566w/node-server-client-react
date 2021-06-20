import { createSlice } from '@reduxjs/toolkit'

const ArticlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
  },
  reducers: {
    storeAllArticles(state, action) {
      state.articles = action.payload
    },
  },
})

export default ArticlesSlice
