import axios from 'axios'

const API_URL = process.env.API_URL || 'http://52.220.210.79/api/'
const axl = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: '*/*'
  }
})

axl.interceptors.request.use((config: any) => config, (error: any) => Promise.reject(error))

axl.interceptors.response.use((response: any) => response, (error: any) => Promise.reject(error))

export default axl
