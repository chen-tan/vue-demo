<template>
    <div>
        <button @click="handleClick">{{ btnText }}</button>
    </div>
</template>
<script>
import login from '../login';
console.log(login);
export default {
    data(){
        return {
            isLogin:login.isLogin()
        }
    },
    computed:{
        btnText(){
            return this.isLogin ? '取消登录' : '登录';
        },
    },
    methods:{
        handleClick(){
            if(this.isLogin){
                login.cancleLogin();
                this.isLogin=!this.isLogin;
            }else{
                login.login();
                this.isLogin=!this.isLogin;
                const goBack = window.confirm('登录成功，要回到原来的页面嘛？');
                if(goBack){
                    this.$router.go(-1);
                }
            }
        },
    }
}
</script>