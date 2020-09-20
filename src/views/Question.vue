<template>
    <div>
        <div class="main" v-if="question">问题：{{ question.title }}</div>
        <div class="other" v-if="question">
            <div
             v-for="type in otherQuestionList"
             :key="type"
             :class="type"
             @click="handleClick(type)"
            >{{ question[type] }}</div>
            
        </div>
    </div>
</template>
<script>
export default {
    props:{
        id:{
            type:[String,Number]
        }
    },
    data(){
        return {
            question:null,
        }
    },
    computed:{
        otherQuestionList(){
            let arr=[];
            if(this.question.prev!==null){
                arr.push('prev');
            }
            if(this.question.next!==null){
                arr.push('next');
            }
            return arr;
        },
        
    },
    methods:{
        handleClick(type){
            const typeId=type + 'Id';
            const jumpId = this.question[typeId];
            this.$router.push({name:'question',params:{id:jumpId}})
        },
        getData(){
            const { id } = this;
            // const { id } = this.$route.params;
            this.$axios.get(`question/${id}`).then(res=>{
            this.question=res;
            })
        }
    },
    watch:{
        '$route':{
            handler(){
                this.getData();
            },
            immediate:true,
        },
        
    },
}
</script> 

<style scoped>
    .main{
        margin-bottom:100px;
    }
    .prev,
    .next{
        width:200px;
        white-space:nowrap;
        overflow:hidden;
        text-overflow: ellipsis;
        cursor:pointer;
        color:#3385ff;
        text-decoration:underline;
    }
    
    .prev{
        float:left;
    }
    .next{
        float:right;
        margin-right:400px;
    }

</style>