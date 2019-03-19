import axios from "axios";

//axios 配置

const instance = axios.create({
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 30000,
    baseURL: "", //接口请求地址
})

instance.interceptors.request.use(config => {
    // 在发送请求之前做些什么，比如传token
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = token;
    }
    //config.data = JSON.stringify(config.data);
    return config
}, error => {
    console.log(error)
    return Promise.reject(error)
})

// 添加相应拦截器
instance.interceptors.response.use(response => {
    //对相应的数据做处理
    const res = response;
    return res;
}, error => {
    console.error(error)
    return Promise.reject(error)
})

export default instance