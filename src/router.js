import Vue from 'vue';
import VueRouter from 'vue-router'

import BooksList from './pages/BooksList.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'books/index',
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
        path: '*',
        redirect: {path: '/'},
    },
];

const router = new VueRouter({
    routes,
});

// router.beforeEach((to, from, next) => {
//
//     next();
// });

export default router;
