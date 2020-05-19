import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('./components/Main.vue'),
    },
    {
        path: '/content',
        name: 'content',
        component: () => import('./components/Main.vue'),
    },
    {
        path: '/other-links',
        name: 'otherLinks',
        component: () => import('./components/Main.vue'),
    },
    {
        path: '/about-us',
        name: 'aboutUs',
        component: () => import('./components/Content.vue'),
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('./components/Content.vue'),
    },
    {
        path: '*',
        redirect: {path: '/'},
    },
];

const router = new VueRouter({
    routes,
});

export default router;
