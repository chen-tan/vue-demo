import install from './install';
class VueRouter{
    constructor(options){
        this.routeMap=this.createRouteMap(options.routes || []);
    }
    createRouteMap(routes){
        const routeMap = {};
        for (let i = 0; i < routes.length; i++) {
            const route = routes[i];
            routeMap[route['path']]=route['component'];
        }
        return routeMap;
    }
}

VueRouter.install=install;

export default VueRouter;