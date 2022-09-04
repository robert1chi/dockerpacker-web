import { useRoute, createRouter, createWebHashHistory, RouteRecordRaw, _RouteRecordBase } from 'vue-router';
import uniq from 'lodash/uniq';

const modules: Record<string, {
    [key: string]: any;
}> = import.meta.glob('./modules/**/*.ts', { eager: true })

const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
    const mod = modules[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    routeModuleList.push(...modList);
});

export const asyncRouter: RouteRecordRaw[] = [...routeModuleList];

const defaultRouter: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        redirect: '/dashboard/index',
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: { hidden: false }
    },
    {
        path: '/:w+',
        name: '404Page',
        redirect: '/result/404'
    }
]

export const allRoutes = [...defaultRouter, ...asyncRouter,]

export const getRoutesExpanded = () => {
    const expandedRoutes: string[] = [];

    allRoutes.forEach((item) => {
        if (item.meta && item.meta.expanded) {
            expandedRoutes.push(item.path);
        }
        if (item.children && item.children.length > 0) {
            item.children
                .filter((child) => child.meta && child.meta.expanded)
                .forEach((child: RouteRecordRaw) => {
                    expandedRoutes.push(item.path);
                    expandedRoutes.push(`${item.path}/${child.path}`);
                });
        }
    });
    return uniq(expandedRoutes);
};

export const getActive = (maxLevel = 3): string => {
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