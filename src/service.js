import axios from "axios";
import { getToken } from "./utils/settingToken";
import { ElMessage } from "element-plus";

const service = axios.create({
    baseURL: 'http://1.116.64.64:5004/api2/',
    timeout: 3000,
    headers: {
        "Content-Type": "multipart/form-data;charset=utf-8"
    }
})

service.interceptors.request.use((config) => {
    config.headers['token'] = getToken('token')
    return config
}, (error) => {
    return Promise.reject(error)
})

service.interceptors.response.use((response) => {
    let { status, message } = response.data
    if (status != 200) {
        ElMessage({
            message: message || 'error', type: 'warning'
        })
    }
    return response;
}, (error) => {
    return Promise.reject(error)
})

// service.get = function (url, options) {
//     return new Promise((resolve, reject) => {
//         instance
//             .get(url, options)
//             .then(response => {
//                 if (response.code === 0) {
//                     resolve(response.data)
//                 } else {
//                     ElMessage.error({
//                         message: response.message
//                     })
//                     reject(response.message)
//                 }
//             })
//             .catch(e => {
//                 console.log(e)
//             })
//     })
// }

// service.post = function (url, data, options) {
//     return new Promise((resolve, reject) => {
//         instance
//             .post(url, data, options)
//             .then(response => {
//                 if (response.code === 0) {
//                     resolve(response.data)
//                 } else {
//                     ElMessage.error({
//                         message: response.message
//                     })
//                     reject(response.message)
//                 }
//             })
//             .catch(e => {
//                 console.log(e)
//             })
//     })
// }

export default service