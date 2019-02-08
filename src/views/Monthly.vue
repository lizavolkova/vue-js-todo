<template>
  <div class="home">
    [Monthly view]
    <CreateTodo v-on:add-todo="addToDo"/>
    <TodoList v-bind:todos="todos"/>
  </div>
</template>

<script>
  import TodoList from '../components/TodoList.vue'
  import CreateTodo from '../components/CreateTodo.vue'

export default {
  name: 'monthly',

    data() {
      return {
          todos: [{
              title: 'Todo A',
              done: false,
          }, {
              title: 'Todo B',
              done: false,
          }, {
              title: 'Todo C',
              done: false,
          }, {
              title: 'Todo D',
              done: false,
          }]
      }
    },

    methods: {
        addToDo(todo) {
            this.todos.push({
                title: todo.title,
                done: false
            });

            console.log(this.todos);
        }
    },

    components: {
        TodoList,
        CreateTodo
    }
}
</script>
