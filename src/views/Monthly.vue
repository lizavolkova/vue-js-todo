<template>
  <div class="home">
    <v-calendar :attributes='attrs'></v-calendar>
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
            attrs: [
                {
                    key: 'today',
                    highlight: {
                        backgroundColor: '#ff8080',
                        // Other properties are available too, like `height` & `borderRadius`
                    },
                    dot: { backgroundColor: 'red' },
                    dates: new Date(2018, 0, 1)
                }
            ],
        }
    },

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
