import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      todos: [{
          id: 0,
          title: 'Todo A',
          date: '123',
          done: false,
      }, {
          id: 1,
          title: 'Todo B',
          date: '456',
          done: false,
      }, {
          id: 2,
          title: 'Todo C',
          date: '789',
          done: false,
      }, {
          id: 3,
          title: 'Todo D',
          date: '101112',
          done: false,
      }],

  },

  mutations: {
      addTodo (state, todo) {
          state.todos.push(todo)
      },

      deleteTodo (state, todo) {
          state.todos.splice(state.todos.indexOf(todo), 1)
      },

      editTodo (state, { todo, title = todo.title, date = todo.date, done = todo.done }) {
          todo.title = title;
          todo.date = date;
          todo.done = done;
      }
  },

  actions: {
      addTodo ({ commit }, todo) {
          commit('addTodo', {
              title: todo.title,
              done: false
          })
      },

      deleteTodo ({ commit }, todo) {
          commit('deleteTodo', todo)
      },

      toggleTodo ({ commit }, todo) {
          commit('editTodo', { todo, done: !todo.done })
      },

      editTodo ({ commit }, todo) {
          commit('editTodo', { todo, title: todo.title })
      },
  }
})
