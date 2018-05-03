// Описание логики хранилища Vuex
//импортируется в main.js под видом модуля counter
export default {
    state: {  //Установка глобального состояния
        count: 0,
        todos: [
            { id: 1, text: 'qwerty', done: true },
            { id: 2, text: 'QWERTY', done: false }
        ]
    },
    //Мутации необхдимы для изменения состояния
    mutations: {  //Прописываются обработчики состояния
        increment: (state, incrementer) => state.count += incrementer,
        decrement: state => state.count--
    },
    getters: {
        doneTodos: (state) => {
            return state.todos.filter(todo => todo.done)
        }
    },
    //Действия инициируют мутации, могут использоваться для асинхронных операций
    actions: {
        increment (context) {
            context.commit('increment')
        }
    },
    namespaced: true, //используем неймспейс
}