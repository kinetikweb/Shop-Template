import Home from './views/Home.vue'
import Shop from './views/Shop.vue'
import ProductPage from './views/ProductPage.vue'
import Login from './views/Login.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
    { path: '/', component: Home, meta: { title: 'Home' } },
    {
        path: '/shop',
        meta: { title: 'Shop' },
        component: Shop,
    },
    {
        path: '/product',
        meta: { title: 'ProductPage' },
        component: ProductPage,
    },
    {
        path: '/login',
        meta: { title: 'Login' },
        component: Login,
    },
    { path: '/:path(.*)', component: NotFound },
]
