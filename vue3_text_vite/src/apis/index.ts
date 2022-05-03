import axios from 'axios'
const baseURL = 'http://112.74.63.188/beeapi'

const Axios = axios.create({
    baseURL,
    timeout:5000
})

export default Axios;