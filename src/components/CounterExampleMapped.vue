<template>
    <div id="app2">
        <p>{{ count }}</p>
        <p>
            <button v-on:click="increment(1)">+</button>
            <button v-on:click="increment(5)">+</button>
            <button v-on:click="decrement()">-</button>
        </p>
        <some-list/>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapGetters} from 'vuex';
    import SomeList from './SomeList.vue';

    export default {
        name: 'CounterExampleMapped', //
        components: {SomeList},
        computed: { // здесь добавляются свойства которые будут вычеслятся
            ...mapState('counter'/*модуль*/, ['count']/*совйство отслеживания в методе state*/),  //указываем что использовать свойство из глобального хранилища Vuex
        },
        methods: {  // методы модуля
            ...mapMutations('counter', ['increment', 'decrement']/*методы*/), //указываем что использовать метод глобального из хранилища Vuex
        },
        getters: { //getters и setter модулей
            ...mapGetters('counter', ['doneTodos']),
        }
    }
</script>