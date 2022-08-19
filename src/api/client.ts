import axios from 'axios'

const BASE_URL_PROD = "https://worried-ant-jacket.cyclic.app/api"
const BASE_URL_DEV = "http://127.0.0.1:3000/api"

const client = axios.create({ baseURL: BASE_URL_PROD, withCredentials: true })

export { client }