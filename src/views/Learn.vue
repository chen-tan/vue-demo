<template>
    <div>
        <div>问题展示</div>
        <ul>
            <li v-for="question in questionList" :key="question.id">
                <router-link :to="{name:'question',params:{id:question.id}}">{{ question.title }}</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
import axios from '@/axios.js';
export default {
    data(){
        return {
            questionList:[],
        }
    },
    created(){
        this.$axios.get('question').then(res=>{
            this.questionList=res;
        });
    },
   
}
</script>