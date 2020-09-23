<template>
    <div>
        <div>
            <span>学生总数：{{ countStudents }}</span>
            <span>未成年：{{ countJuvenile }}</span>
        </div>
        <ul>
            <li 
             v-for="student in studentList"
             :key="student.id"
            >姓名：{{ student.name }} 年龄：{{ student.age }}</li>
        </ul>
    </div>
    
</template>
<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
export default {
    computed:{
        ...mapState(['studentList']),
        ...mapGetters(['countStudents','countJuvenile'])
    },
    
}
</script>
<style scoped>
    ul{
        margin-top:20px;
    }
    li{
        margin-bottom:10px;
    }
</style>