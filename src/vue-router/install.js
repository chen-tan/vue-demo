import link from './components/link'
import view from './components/view'
export default Vue=>{
    Object.defineProperty(Vue.prototype,'$router',{
        get(){
            return {};
        }
    })
    Object.defineProperty(Vue.prototype,'$route',{
        get(){
            return {};
        }
    })

    Vue.component('router-link',link);
    Vue.component('router-view',view);
}
