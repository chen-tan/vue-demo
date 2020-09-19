import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './views/Home.vue'
Vue.use(VueRouter);
const routes=[
    {
        path:'/',
        redirect:'/home'
    },
    { 
      name:'home',
      path:'/home',
      component:Home,
    },
    {
      path:'/learn',
      component:()=>import('./views/Learn.vue'),
      children:[
          {
            name:'question',
            path:'question/:id',
            component:()=>import('./views/Queation')
          },
      ]
    },
    {
      path:'/student',
      component:()=>import('./views/Student.vue'),
    },
    {
      path:'/about',
      component:()=>import('./views/About.vue')
    },
    {
        path:'/activity',
        component:()=>import('./views/Activity.vue'),
        children:[
            {
                path:'/',
                redirect:'academic'
            },
            {   name:'academic',
                path:'academic',
                component:()=>import('./views/Academic.vue')
            },
            {   name:'personal',
                path:'personal',
                component:()=>import('./views/Personal.vue')
            },
            {   name:'download',
                path:'download',
                component:()=>import('./views/Download.vue')
            }
        ]
      },
  ];
  export default new VueRouter({
      mode:'history',
      routes,
  })