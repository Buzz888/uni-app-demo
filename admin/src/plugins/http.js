import axios from 'axios'
const http = axios.create({
    baseURL:'http://localhost:3000/admin/api/admin',
})
export default http