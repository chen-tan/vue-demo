import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);
export default new vuex.Store({
     state:{
         count:1,
         studentList:[],
     },
     getters:{
         countStudents(state){
             return state.studentList.length
         },
         countJuvenile(state){
             let juvenileList = state.studentList.filter(item=>{
                 return item.age<18
             })
             return juvenileList.length;
         },
         countAdd:state=>state.count + 2,
         countDouble:state=>state.count * 2
         
     },
     mutations:{
        countIncrement(state,{ num }){
            state.count += num;
        }
     },
     actions:{
         incrementAsync(context,{ num }){
             return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    context.commit('countIncrement', { num });
                    resolve();
                 },1000)
             }) 
             
         }
     },
     strict:process.env.NODE_ENV !=='production',
 })
