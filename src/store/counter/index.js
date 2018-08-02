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
    //Мутации необхдимы для изменения состояния хранилища (они похожи на функцию обработчик)
    mutations: {  //Прописываются обработчики состояния
        increment: (state, incrementer) => state.count += incrementer,
        decrement: state => state.count--
    },
    //Можно считать как вычисляемые св-ва для хранилища, результат кешируются
    //основываясь на своих зависимостях, и будут пересчитаны если изменется одна
    //из его зависимостей
    getters: {
        /**
         *
         * @param state  //Первый параметр ссылка на состояние хранилища
         * @param getters //Список всех геттеров
         * @return {Array.<*>}
         */
        doneTodos: (state, getters) => {
            return state.todos.filter(todo => todo.done)
        }
    },
    //Действия инициируют мутации, могут использоваться для асинхронных операций
    //!!! Нужна обязательно, для задействования метода который мы прописали в мутации
    actions: {
        /**
         *
         * @param context //Обьект контекста содержащий те же методы и св-ва, что и
         *                //екземпляр хранилища ли обратиться к состоянию и геттерам
         *                //через context.state и context.getters
         */
        increment (context) {
            //мутации должны и будут быть синхронными если прописать context.commit(
            context.commit('increment')
        },
        /**
         * Внутри действий можно выполнять асинхронные операции:
         * @param commit
         */
        incrementAsync ({ commit, state }) {
            //мутации будут асинхронными если прописать context.commit(
            store.dispatch('incrementAsync', {
                amount: 10
            });
        },
        //с использованием асинхронности
        async actionA ({ commit }) {
            commit('gotData', await getData())
        },
        async actionB ({ dispatch, commit }) {
            await dispatch('actionA') // дожидаемся завершения действия `actionA`
            commit('gotOtherData', await getOtherData())
        }
    },
    namespaced: true, //используем неймспейс
}