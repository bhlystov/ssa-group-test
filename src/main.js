// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';

Vue.config.productionTip = false;

Vue.use(Vuex);

import createLogger from 'vuex/dist/logger'

import counter from './store/counter/index';

//Регистрация хранилища Vuex
const store = new Vuex.Store({
    modules: {
      counter  //венсли логику в другой файл и обьявили название этого модуля ./store/counter
    },
    plugins: [createLogger()] //добавления логирования в консоль
});

// инициализация главного модуля Vue
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    store //добавляем Vuex в зависимости к главному модулю
});