<template>
    <div id="app">
        <date-picker :date="date" @change-date="changeDate"/>
    </div>
</template>

<script>
import DatePicker from './DatePicker';
export default {
    components:{
        DatePicker,
    },
    data(){
        return {
            date:new Date(),
        }
    },
    methods:{
        changeDate(day){
            this.date=day;
        }
    }
}
</script>

<style scoped>
    
</style>