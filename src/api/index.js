import axios from 'axios'
import app from '@/main.js' // mounted AFTER this file is loaded (will be undefined if used immediately and not in a callable)

const baseURL = process.env.VUE_APP_API

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// loader instance
let loader = null

const hideLoader = () => {
  loader && loader.hide()
  loader = null
}

instance.interceptors.request.use(
  config => {
    loader = app.config.globalProperties.$loading.show()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    hideLoader()
    return response
  },
  error => {
    hideLoader()
    Promise.reject(error)
  }
)

export default instance
