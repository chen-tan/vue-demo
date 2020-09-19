import axios from 'axios';
import Vue from 'vue';
axios.defaults.baseURL='/';

axios.interceptors.request.use(request=>{
    request.url=request.url + '.json';
    return request;
})
axios.interceptors.response.use(response=>{
    if(response.status===200){
        return response.data.data;
    }
    return response;
})

Vue.prototype.$axios=axios;

export default axios;
