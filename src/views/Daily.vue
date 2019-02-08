<template>
  <div class="home">
    [Daily view]
    <TodoList v-bind:todos="todos"/>
  </div>
</template>

<script>
    import TodoList from '../components/TodoList.vue'

    export default {
        name: 'monthly',

        methods: {

        },

        computed: {
            todos() {
                return this.$store.state.todos
            },
        },

        components: {
            TodoList
        }
    }
</script>
