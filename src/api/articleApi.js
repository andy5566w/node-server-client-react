import axios from 'axios'
import Cookie from 'js-cookie'

const apiArticle = axios.create({
  baseURL: 'http://localhost:3001/',
})

apiArticle.interceptors.request.use(
  function (config) {
    const token = Cookie.get('token')
    config.headers.authorization = 'Bearer ' + token
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

export default apiArticle
