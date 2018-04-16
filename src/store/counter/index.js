// Описание логики хранилища Vuex
export default {
    state: {  //Установка глобального состояния
        count: 0
    },
    //Мутации необхдимы для изменения состояния
    mutations: {  //Прописываются обработчики состояния
        increment: (state, incrementer) => state.count += incrementer,
        decrement: state => state.count--
    },
    //Действия инициируют мутации, могут использоваться для асинхронных операций
    actions: {
        increment (context) {
            context.commit('increment')
        }
    },
    namespaced: true, //используем неймспейс
}