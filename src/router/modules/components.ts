import Layout from '@/layouts'

export default [
    {
        path: '/result',
        name: 'result',
        component: Layout,
        redirect: '/result/404',
        meta: { title: 'result.title' },
        children: [{
            path: '404',
            name: '404',
            component: () => import('@/views/result/404/index.vue'),
            meta: {
                title: 'result.notfound'
            }
        }]
    }
]