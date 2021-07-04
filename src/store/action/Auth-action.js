import { authActions } from '../index'

export const authenticateState = (userData) => (dispatch) => {
  if (userData.status && userData.status === 'success')
    dispatch(authActions.authorize(userData.data.user))
}
