import { createSlice } from '@reduxjs/toolkit'
import Cookie from 'js-cookie'
const initialState = {
  isAuth: Boolean(Cookie.get('token')),
  userData: {},
}

const Auth = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    authorize(state, action) {
      state.isAuth = true
      state.userData = action.payload
    },
    logout(state) {
      state.isAuth = false
      state.userData = {}
      Cookie.remove('token')
    },
  },
})

export default Auth
