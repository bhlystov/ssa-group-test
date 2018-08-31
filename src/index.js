import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';

import VueLoading from 'vuex-loading'
Vue.use(VueLoading);

//Add bootstrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Add Vuex
Vue.config.productionTip = false;
Vue.use(Vuex);
import createLogger from 'vuex/dist/logger'
import list from './store/index.js';
import contentText from './store/contentText.js';

//Регистрация хранилища Vuex
const store = new Vuex.Store({
    modules: {
        list,
        contentText
    },
    plugins: [createLogger()]
});

document.addEventListener('DOMContentLoaded', function (event) {
    const mountPoint = document.getElementById('app');

    new Vue({
        router,
        store,
        vueLoading: new VueLoading({registerComponents: false, useVuex: true}),
        render: h => h(App),
    }).$mount(mountPoint);
});