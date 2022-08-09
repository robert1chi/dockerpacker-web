import Layout from '@/layouts'

export default [
    {
        path: '/result',
        name: 'result',
        component: Layout,
        redirect: '/result/404',
        meta: { title: '结果页' },
        children: [{
            path: '404',
            name: '404',
            component: () => import('@/views/layouts/404.vue'),
            meta: {
                title: '404'
            }
        }]
    }
]