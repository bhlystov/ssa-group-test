import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('./pages/Main.vue'),
        // props: route => {
        //     return {
        //         setNumberOfPage: parseInt(route.query.setNumberOfPage),
        //         sortBy: route.query.sortBy,
        //         filterBookName: route.query.filterBookName
        //     };
        // },
    },
    {
        path: '/content',
        name: 'content',
        component: () => import('./pages/Content.vue'),
        // props: route => {
        //     return {
        //         idBook: parseInt(route.query.idBook),
        //     };
        // },
    },
    {
        path: '/other-links',
        name: 'otherLinks',
        component: () => import('./pages/Content.vue'),
        // props: route => {
        //     return {
        //         authorId: parseInt(route.query.authorId),
        //     };
        // },
    },
    {
        path: '/about-us',
        name: 'aboutUs',
        component: () => import('./pages/Content.vue'),
        // props: route => {
        //     return {
        //         authorId: parseInt(route.query.authorId),
        //     };
        // },
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('./pages/Content.vue'),
        props: route => {
            return {
                authorId: parseInt(route.query.authorId),
            };
        },
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
