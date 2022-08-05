import { useRoute, createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import components from './modules/components';

const defaultRouter: Array<RouteRecordRaw> = [{
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
},
{
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
},
{
    path: '/:w+',
    name: '404',
    redirect: '/result/404',
}
]

export const allRoutes = [...defaultRouter, ...components]

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