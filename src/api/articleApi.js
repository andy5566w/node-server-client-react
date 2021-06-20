import axios from 'axios'

const apiArticle = axios.create({
  baseURL: 'http://localhost:3001/',
})

export default apiArticle
