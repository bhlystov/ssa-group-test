<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{ msg }}</p>
    <!--<router-view/>-->
    <counter-example/>
    <counter-example-mapped/>
  </div>
</template>

<script>
  //импортим дочерний компонент <counter-example/>
import CounterExample from './components/CounterExample.vue';
import CounterExampleMapped from './components/CounterExampleMapped.vue';

export default {
    name: 'App',
    components: {CounterExample, CounterExampleMapped}, // Добавляем название класса который добавлен в зависимости
    template: '<counter-example/>', // Прописываем название импортированного модуля который мы добавим в верстку
    data: function () { //Обьявление локальных данных
        return {
            msg: "Hello"
        }
    }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
