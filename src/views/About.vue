<template>
    <div class="about">
        <div>关于</div>
        <!-- <router-link class="toFirst" to="/">回首页</router-link> -->
    </div>
    
</template>
<script>
export default {
    created(){
        // console.log(this.$route);
    },
}
</script>
<style scoped>
    .about{
        position:relative;

    }
    .toFirst{
        position:absolute;
        left:100px;
        top:1000px;
        background: #f00;
    }
</style>
