import { createStore } from 'vuex'

export default createStore({
  state: {
    etodo: [],
    todos:[]
  },
  getters: {
    doneTodos (state) {
      return state.todos.filter(todo => todo.completed).length;
    }
  },
  mutations: {
    addTodo(state, todo){
      state.todos.push(todo)
    },
    removeTodo(state, index){
      state.todos.splice(index, 1)
    },
    seteTodo(state, todo){
      state.etodo = todo
    },
  },
  actions: {
  },
  modules: {
  }
})
