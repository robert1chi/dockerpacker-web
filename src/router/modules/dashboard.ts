import Layout from '@/layouts'

export default [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Layout,
        redirect: '/dashboard/index',
        meta: { title: 'dashboard.title' },
        children: [{
            path: 'index',
            name: 'index',
            component: () => import('@/views/dashboard'),
            meta: {
                title: 'dashboard.index',
                requiresAuth: true
            }
        }]
    }
]