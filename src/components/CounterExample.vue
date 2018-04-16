<template>
    <div id="app2">
        <p>{{ count }}</p>
        <a v-bind:href="url">ссылка тест</a>
        <p>
            <button @click="increment(1)">+</button>
            <button @click="increment(5)">+</button>
            <button @click="decrement()">-</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'CounterExample',
        data: function () {     //в модулях данные прописываются по стандарту data: function ()
            return {
                url: "http//qwerty"
            }
        },
        computed: { // здесь добавляются свойства которые будут вычеслятся
            count: function () {  // обязательно прописывать через count: function () что-бы обратится к хранилищу this.$store
                return this.$store.state.counter.count;
            }
        },
        methods: {  // методы модуля
            increment: function (increment) {
                this.$store.commit('counter/increment', increment); // this.$store обращаемся к хранилищу Vuex, commit('increment') - инициализация обработки мутации
            },
            decrement: function () {
                this.$store.commit('counter/decrement');
            }
        }
    }
</script>