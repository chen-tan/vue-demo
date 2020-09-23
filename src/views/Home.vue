<template>
    <div class="home">
        <div>首页</div>
        <button @click="handleClick">点击</button>{{ count }} {{ countAdd }} {{ countDouble }}
        <!-- <div class="test">测试</div> -->
    </div>
    
</template>
<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
export default {
    computed:{
        ...mapState(['count']),
        ...mapGetters(['countAdd','countDouble']),
    },
    methods:{
        handleClick(){
            let num = Math.floor(Math.random() *10);
            // this.$store.commit('countIncrement',{ num });
            this.$store.dispatch('incrementAsync',{ num }).then(res=>{
                alert('count值改变啦')
            })
        }
    }
}
</script>
<style scoped>
    .home{
        position:relative;
    }
    .test{
        position:absolute;
        top:1000px;
        background-color:red;
    }
</style>