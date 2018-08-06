import Vue from 'vue';
import VueRouter from 'vue-router'

import BooksList from './pages/BooksList.vue';
import BookDescription from './pages/BookDescription.vue';
import AuthorListOfBooks from './pages/AuthorListOfBooks.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: BooksList,
        //component: {template: '<router-view/>'},
        // children: [
        //     {
        //         path: 'books',
        //         name: 'books/index',
        //         component: BooksList,
                // props: route => {
                //     return {
                //         companyId: parseInt(route.params.companyId),
                //         dateFrom: route.query.from,
                //         dateTo: route.query.to,
                //         groupBy: route.query.group,
                //     };
                // },
        //     },
        // ],
    },
    {
        path: '/book',
        name: 'bookDescription',
        component: BookDescription,
        props: route => {
            return {
                idBook: parseInt(route.query.idBook),
            };
        },
    },
    {
        path: '/author',
        name: 'author',
        component: AuthorListOfBooks,
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
