import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      currentDate: new Date(),
      todos: [{
          id: 0,
          title: 'Todo A',
          date: new Date('February 2, 2019 12:00'),
          done: false,
      }, {
          id: 1,
          title: 'Celebrate Valentines Day',
          date: new Date('February 14, 2019 12:00'),
          done: true,
      },
      {
          id: 2,
          title: 'Pay Day!',
          date: new Date('February 22, 2019 12:00'),
          done: false
      }
    ],

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
      },

      setDate(state, day) {
          state.currentDate = day;
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

      setDate({ commit }, day) {
          commit('setDate', day)
      }
  }
})
