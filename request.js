axios.defaults.baseURL='https://developer.duyiedu.com/vue/bz/';

axios.interceptors.response.use((response)=>{
    if(response.status===200){
        const {url,baseURL} = response.config;
        if(url==baseURL + 'video'){
            return {
                count:response.data.count,
                data:response.data.data
            }
        }
        return response.data.data;
    }
    return response;
})