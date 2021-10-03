import Home from './views/Home.vue'
import Shop from './views/Shop.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
    { path: '/', component: Home, meta: { title: 'Home' } },
    {
        path: '/shop',
        meta: { title: 'Shop' },
        component: Shop,
    },
    { path: '/:path(.*)', component: NotFound },
]
