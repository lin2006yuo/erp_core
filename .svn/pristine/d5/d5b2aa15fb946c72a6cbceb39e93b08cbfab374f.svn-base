import axios from 'axios'
import {Message} from 'element-ui'
export const $baseUrl = 'http://172.18.8.246:9909'
const http = axios.create({
    baseURL: $baseUrl
});

// 请求拦截器
http.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 添加一个响应拦截器
http.interceptors.response.use(function (response) {
    return response.data;
}, (error) => {
    Message({message:'响应报错',type:'error'})
    return Promise.reject(error);
});


export const $http =  (api,data={},header={})=>{
    const method = api.split('|')[0];
    const url = api.split('|')[1];
    switch (method){
        case 'get':
            return http({url,method,params:data,header});
        case 'delete':
        case 'put' :
        case 'post':
            return http({url,method,data,header});
    }
};