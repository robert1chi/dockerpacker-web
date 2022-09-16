import Layout from '@/layouts'

export default [
    {
        path: '/manage',
        name: 'manage',
        component: Layout,
        redirect: '/manage/home',
        meta: {
            title: 'manage.title',
            requiresAuth: true
        },
        children: [{
            path: 'home',
            name: 'ManageHomepage',
            component: () => import('@/views/manage/index'),
            meta: { title: 'manage.homepage', requireAuth: true }
        }]
    },
    {
        path: '/users',
        name: 'users',
        component: Layout,
        redirect: '/users/profile',
        meta: {
            title: 'users.title',
            requiresAuth: true
        },
        children: [{
            path: 'profile',
            name: 'UsersProfile',
            component: () => import('@/views/users/profile/index'),
            meta: { title: 'users.profile.title', requireAuth: true }
        }]
    },
    {
        path: '/result',
        name: 'result',
        component: Layout,
        redirect: '/result/404',
        meta: { title: 'result.title', requiresAuth: true },
        children: [{
            path: '404',
            name: 'Result404',
            component: () => import('@/views/result/404/index.vue'),
            meta: {
                title: 'result.notfound',
                requiresAuth: true
            }
        }]
    }
]