<template>
    <div>
        <button @click="handleClick">{{ isLogin ? '取消登录' : '登录'}}</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isLogin:document.cookie.includes('login=true')
        }
    },
    methods:{
        handleClick(){
            if(this.isLogin){
                let date = new Date();
                date.setTime(date.getTime() - 1000000);
                console.log(date.toGMTString());
                document.cookie=`login=true&expires=${date.toGMTString()}`;
                this.isLogin=!this.isLogin;
                
            }else{
                let date = new Date();
                let expires=147;
                date.setTime(date.getTime() + expires*24*60*60*1000);
                document.cookie=`login=true&expires=${date.toGMTString()}`;
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