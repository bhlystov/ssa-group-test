import Vue from 'vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ru-RU';
import './element-theme.scss'
import App from './App';
import router from './router';

Vue.use(ElementUI, {locale});

import VueLodash from 'vue-lodash'

const options = { name: 'lodash' } // customize the way you want to call it

Vue.use(VueLodash, options) // options is optional

document.addEventListener('DOMContentLoaded', function (event) {
    const mountPoint = document.getElementById('app');

    new Vue({
        router,
        data() {
            const data = {};

            for ([key, value] of Object.entries(mountPoint.dataset)) {
                try {
                    data[key] = JSON.parse(value);
                } catch (e) {
                    data[key] = value;
                }
            }

            return data;
        },
        render: h => h(App),
    }).$mount(mountPoint);
});
