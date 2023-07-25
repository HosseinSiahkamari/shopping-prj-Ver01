import axios, { Axios } from 'axios'

const instance = axios.create({
    baseURL: 'https://shopping-prj-default-rtdb.firebaseio.com'
})
 
export default instance;