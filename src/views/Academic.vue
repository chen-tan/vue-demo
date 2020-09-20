<template>
    <div>
        <ul>
                <router-link 
                 v-for="question in questionList"
                 :key="question.id"
                 :to="{name:'question',params:{id:question.id}}"
                 tag="li"
                >{{ question.title }}</router-link>
        </ul>
    </div>
</template>
<script>
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

<style scoped>
    li{
        list-style:none;
        margin-bottom:5px;
        cursor:pointer;
    }
    li:hover{
        color:#3385ff;
        text-decoration: underline;
    }
</style>