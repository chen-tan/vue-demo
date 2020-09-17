<template>
    <div class="date-picker" v-click-outside>
        <div class="picker-input">
            <span class="input-prefix">
                <i class="iconfont">&#xe75b;</i>
            </span>
            <input 
             type="text" 
             :value="chooseDate"
             @input="inputDate($event)"
            >
        </div>
        <div class="picker-panel" v-if="showPanel">
            <div class="picker-arrow" />
            <div class="picker-body">
                <div class="picker-header">
                    <span class="picker-btn iconfont icon-prev-year" @click="changeYear('prev')">&#xe714;</span>
                    <span class="picker-btn iconfont icon-prev-month" @click="changeMonth('prev')">&#xe712;</span>
                    <span class="picker-date">
                        {{ showDate.year }}年{{ showDate.month + 1 }}月
                    </span>
                    <span class="picker-btn iconfont icon-next-month" @click="changeMonth('next')">&#xe718;</span>
                    <span class="picker-btn iconfont icon-next-year" @click="changeYear('next')">&#xe713;</span>
                </div>
                <div class="picker-content">
                    <div class="picker-weeks">
                        <div
                         v-for="week in ['日','一','二','三','四','五','六']" 
                         :key="week"
                         class="week"
                        >{{ week }}</div>
                    </div>
                    <div class="picker-days">
                        <div
                         v-for="(day,index) in getOneMonthDays"
                         :key="day + '-' + index"
                         :class="{'is-other':!isCur(day).isCurMonth,
                                  'is-today':isCur(day).isToday,
                                  'is-select':day.getMonth()===showDate.month && day.getDate()===showDate.day}"
                         @click="selectDay(day)"
                        >{{ day.getDate() }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    directives:{
        'click-outside':{
            bind(el,binding,vnode){
                document.onclick=function(e){
                    const dom=e.target;
                    const vm=vnode.context;
                    const isElSon=el.contains(dom);
                    if(isElSon && !this.showPanel){
                        vm.changePanel(true);
                    }else if(!isElSon && vm.showPanel && !dom.classList.contains('is-other')){
                        vm.changePanel(false);
                    }
                }
            },
        }
    },
    props:{
        date:{
            type:Date,
            default:()=>new Date(),
        }
    },
    data(){
        return {
            showDate:{
                year:0,
                month:0,
                day:0
            },
            chooseDay:{
                month:0,
                day:0
            },
            showPanel:false,
        }
    },
    computed:{
        chooseDate(){
            const {year,month,day} = this.getYearMonthDay(this.date);
            return `${year}-${month+1}-${day}`;
        },
        getOneMonthDays(){
            const {year, month} = this.showDate;
            let firstDay=new Date(year,month,1);
            let startDay=new Date(firstDay - firstDay.getDay()*24*60*60*1000);
            let arr=[];
            for(let i=0;i<42;i++){
                arr.push(new Date(startDay.getTime() + i * 24*60*60*1000));
            }
            return arr;
        },
    },
    methods:{
        getYearMonthDay(date){
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            return {
                year,
                month,
                day
            }
        },
        getShowDate(date){
            const {year,month,day} = this.getYearMonthDay(date);
            this.showDate.year=year;
            this.showDate.month=month;
            this.showDate.day=day;
        },
        isCur(day){
            const isCurMonth = day.getMonth()===this.showDate.month;
            const isToday=day.getDate()===new Date().getDate() && day.getMonth()===new Date().getMonth() && day.getFullYear()===new Date().getFullYear();
            return {
                isCurMonth,
                isToday,
            }
        },
        changePanel(flag){
            this.showPanel=flag;
        },
        selectDay(day){
            const {year,month} = this.getYearMonthDay(day);
            // this.chooseDay.month=day.getMonth();
            // this.chooseDay.day=day.getDate();
            this.getShowDate(day);
            this.$emit('change-date',day);
        }, 
        changeMonth(type){
            const moveMonth=type==='prev' ? -1 : 1;
            const {year,month,day} = this.showDate;
            let curDate=new Date(year,month,day);
            curDate.setMonth(month + moveMonth);
            this.showDate.year=curDate.getFullYear();
            this.showDate.month=curDate.getMonth();
        },
        changeYear(type){
            const moveYear=type==='prev'? -1 : 1 ;
            this.showDate.year += moveYear;
        },
        inputDate(e){
            clearTimeout(this.timer);
            this.timer=setTimeout(()=>{
                const val=e.target.value;
                const reg=/-/g;
                const isDate=val.match(reg);
                if(isDate.length !== 2)return;
                let [year,month,day] = val.split('-');
                console.log(year,month,day);
                if(year>0 && month>=1 && month<=12 && day>=0 && day<=31){
                    const inputDay=new Date(year,month-1,day);
                    this.getShowDate(inputDay);
                    this.$emit('change-date',inputDay);
            }
            },1000)
            
        },
    },
    created(){
        this.getShowDate(this.date);
    },


}
</script>



<style scoped>
    @import './assets/font.css';
    @import './assets/datePicker.css';
</style>