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
    import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
    import SomeList from './SomeList.vue';

    //mapState - автоматически генерирующий вычисляемые свойства, проксирующие доступ к состоянию и геттерам хранилища:
    //mapActions - Диспетчеризировать действия в компонентах можно при помощи или this.$store.dispatch('xxx')
    //mapGetters - примешиваем геттеры в вычисляемые свойства оператором расширения
    //mapMutations - Создаёт проксирующие методы компонента, позволяющие инициировать мутации
    export default {
        name: 'CounterExampleMapped', //
        components: {SomeList},
        computed: { // здесь добавляются свойства которые будут вычеслятся
            //указываем что использовать свойство из глобального хранилища Vuex
            ...mapState('counter'/*модуль (он же идет как своеобразный namespase)*/, ['count']/*совйство отслеживания в методе state*/),
        },
        methods: {  // методы модуля
            ...mapMutations('counter', ['increment', 'decrement']/*методы*/), //указываем что использовать метод глобального из хранилища Vuex

            ...mapActions({
                add: 'increment' // проксирует `this.add()` в `this.$store.dispatch('increment')`
            }),
        },
        getters: { //getters и setter модулей
            ...mapGetters('counter', ['doneTodos']),
        }
    }
</script>