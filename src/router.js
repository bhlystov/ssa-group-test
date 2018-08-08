import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('./pages/BooksList.vue'),
        props: route => {
            return {
                setNumberOfPage: parseInt(route.query.setNumberOfPage),
                sortBy: route.query.sortBy,
                filterBookName: route.query.filterBookName
            };
        },
    },
    {
        path: '/book',
        name: 'bookDescription',
        component: () => import('./pages/BookDescription.vue'),
        props: route => {
            return {
                idBook: parseInt(route.query.idBook),
            };
        },
    },
    {
        path: '/author',
        name: 'author',
        component: () => import('./pages/AuthorListOfBooks.vue'),
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
