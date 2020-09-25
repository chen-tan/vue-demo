import link from './components/link'
import view from './components/view'
export default Vue=>{
    Vue.mixin({
        beforeCreate(){
            if(this.$options.router){
                this._router=this.$options.router;
                this._route=this.$router.history.current;
                Vue.util.defineReactive(this,'$route',this.$router.history.current)
            }
        }
    })
    Object.defineProperty(Vue.prototype,'$router',{
        get(){
            return this.$root._router;
        }
    })
    Object.defineProperty(Vue.prototype,'$route',{
        get(){
            return this.$root._route;
        }
    })

    Vue.component('router-link',link);
    Vue.component('router-view',view);
}
