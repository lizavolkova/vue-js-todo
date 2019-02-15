<template>
  <div class="home">
    <v-calendar :attributes='attributes' :theme-styles='themeStyles'>
    </v-calendar>
    <TodoList v-bind:todos="todos"/>
  </div>
</template>

<script>
  import TodoList from '../components/TodoList.vue';
  import 'v-calendar/lib/v-calendar.min.css';

export default {
  name: 'monthly',
    data() {
        return {
            themeStyles: {
                wrapper: {
                    background: 'linear-gradient(to bottom right, #ff5050, #ff66b3)',
                    color: '#fafafa'
                }
            }
        }
    },

    methods: {

    },

    computed: {
        todos() {
            return this.$store.state.todos
        },

        attributes() {
            const completeTodos = this.$store.state.todos.filter(t => t.done).map(t => t.date);
            const pendingTodos = this.$store.state.todos.filter(t => !t.done).map(t => t.date);

            return [
                {
                    dot: {
                        backgroundColor: '#ff4d4d', // Red dot
                    },
                    dates: completeTodos
                },
                {
                    dot: {
                        backgroundColor: '#398fac', // Turquoise dot
                    },
                    dates: pendingTodos
                },
            ]
        }
    },

    components: {
        TodoList
    }
}
</script>
