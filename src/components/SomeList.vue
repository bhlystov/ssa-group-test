<template>
    <div>
        <p v-for="item in todos">{{ item.id+' '+item.text}}</p>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapGetters} from 'vuex';

    export default {
        name: 'SomeList', //
        computed: { // здесь добавляются свойства которые будут вычеслятся
            ...mapState('counter'/*модуль*/, ['todos']/*совйство отслеживания в методе state*/),  //указываем что использовать свойство из глобального хранилища Vuex
        }
    }
</script>