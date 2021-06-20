import axios from 'axios'
import Cookie from 'js-cookie'

const apiArticle = axios.create({
  baseURL: 'http://localhost:3001',
})

apiArticle.interceptors.request.use(
  function (config) {
    config.headers.authorization = 'Bearer ' + Cookie.get('token')
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default apiArticle
