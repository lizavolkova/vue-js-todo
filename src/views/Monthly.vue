<template>
  <div class="home">
    <vc-calendar :attributes='attributes' :theme-styles='themeStyles' @dayclick='dayClicked'></vc-calendar>
    <h2>This Month</h2>
    <TodoList v-bind:todos="todos"/>
  </div>
</template>

<script>
  import TodoList from '../components/TodoList.vue';
  import 'v-calendar/lib/v-calendar.min.css';
  import router from '../router'

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
        dayClicked(day) {
            this.$store.dispatch('setDate', day.dateTime);
            router.push({ name: "daily" });
        }
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
