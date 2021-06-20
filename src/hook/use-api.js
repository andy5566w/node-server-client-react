import { useReducer, useCallback } from 'react'

const httpReducer = (state, action) => {
  switch (action.type) {
    case 'SEND':
      return { data: null, error: null, status: 'pending' }
    case 'SUCCESS':
      return { data: action.responseData, error: null, state: 'completed' }
    case 'ERROR':
      return { data: null, error: action.errorMessage, state: 'completed' }
    default:
      return state
  }
}

const useApi = (requestFunction, startWithPending = false) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? 'pending' : null,
    data: null,
    error: null,
  })

  const sendRequest = useCallback(
    async (requestData) => {
      dispatch({ type: 'SEND' })
      try {
        const { data: responseData } = await requestFunction(requestData)
        dispatch({ type: 'SUCCESS', responseData })
      } catch (error) {
        dispatch({
          type: 'ERROR',
          errorMessage: error.message || '出錯但是沒有錯誤訊息',
        })
      }
    },
    [requestFunction]
  )
  return { sendRequest, ...httpState }
}

export default useApi
