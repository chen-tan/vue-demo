import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './views/Home.vue'
import login from './login.js';
Vue.use(VueRouter);
const routes=[
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('./views/Login.vue')
    },
    { 
      name:'home',
      path:'/home',
      component:Home,
    },
    {
      name:'learn',
      path:'/learn',
      components:{
        default:()=>import('./views/Learn.vue'),
        activity:()=>import('./views/Activity.vue')
      }
    },
    {
        name:'question',
        path:'/question/:id',
        props:true,
        component:()=>import('./views/Question')
    },
    {
      path:'/student',
      component:()=>import('./views/Student.vue'),
    },
    {
      path:'/about',
      component:()=>import('./views/About.vue'),
      meta:{
          requireLogin:true,
      }
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
const router = new VueRouter({
      mode:'history',
      routes,
      scrollBehavior:(to,from,savedPosition)=>{
          if(savedPosition){
              return savedPosition;
          }else{
              return {
                  x:0,
                  y:0
              }
          }
      }
  })

router.beforeEach((to,from,next)=>{
    const requireLogin = to.matched.every(item=>item.meta.requireLogin);
    if(requireLogin){
        const isLogin=login.isLogin();
        if(isLogin){
            next();
        }else{
            const isToLogin=window.confirm('需要登录才可以进入，要去登录嘛？');
            isToLogin ? next('/login') : next(false);
        }
    }else{
        next();
    }
})

export default router;