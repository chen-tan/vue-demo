<template>
    <div>
        <p>添加学生</p>
        <p>姓名：<input type="text" v-model="name"></p>
        <p>年龄：<input type="text" v-model="age"></p>
        <button @click="handleClick">添加</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name:'',
            age:''
        }
    },
    methods:{
        handleClick(){
            const { name,age } = this;
            this.$store.state.studentList.push({
                name,
                age,
                id:Math.random()
            })
        }
    }
}
</script>
<style scoped>
    div p{
        margin-bottom:20px;
    }
    div{
        padding-bottom:10px;
        border-bottom:1px solid #000;
    }
</style>