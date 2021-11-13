import axios from 'axios'

const baseURL = process.env.VUE_APP_API

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance
