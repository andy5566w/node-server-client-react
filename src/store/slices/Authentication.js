import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  isAth: false,
}

const Auth = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    authorize(state) {
      state.isAuth = true
    },
  },
})

export default Auth
