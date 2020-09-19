<template>
    <div>
        <router-link :to="{name:'academic'}">学术讨论</router-link>
        <router-link :to="{name:'personal'}">个人信息</router-link>
        <router-link :to="{name:'download'}">资源下载</router-link>
        <div class="views">
            <router-view></router-view>         
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
    a{
        text-decoration:none;
        margin-right:20px;
        padding:5px 10px;
        border-radius:5px;
        color:#404446;
    }
    a.router-link-exact-active{
        color:#fff;
        background-color:#3385ff;
    }
    .views{
        margin-top:20px;
    }
</style>