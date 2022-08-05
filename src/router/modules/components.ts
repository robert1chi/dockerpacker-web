export default [
    {
        path: '/result',
        name: 'result',
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