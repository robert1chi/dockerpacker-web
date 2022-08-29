import { useRoute, createRouter, createWebHashHistory, RouteRecordRaw, _RouteRecordBase } from 'vue-router';
import components from './modules/components';
import dashboard from './modules/dashboard';

const asyncRouter: Array<RouteRecordRaw> = [...components, ...dashboard];

const defaultRouter: Array<RouteRecordRaw> = [{
    path: '/',
    name: 'home',
    redirect: '/dashboard/index'
},
{
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: { hidden: false }
},
{
    path: '/:w+',
    name: '404',
    redirect: '/result/404',
    meta: { hidden: true }
}
]

export const allRoutes = [...asyncRouter, ...defaultRouter]

export const getActive = (maxLevel = 2): string => {
    const route = useRoute();
    if (!route.path) {
        return '';
    }
    return route.path
        .split('/')
        .filter((_item: string, index: number) => index <= maxLevel && index > 0)
        .map((item: string) => `/${item}`)
        .join('');
};

const router = createRouter({
    history: createWebHashHistory(),
    routes: allRoutes,
    scrollBehavior() {
        return {
            el: '#app',
            top: 0,
            behavior: 'smooth',
        };
    },
});

export default router;