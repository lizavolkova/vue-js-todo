<template>
  <div class="home">
    <h2>{{currentDate}}</h2>
    <TodoList v-bind:todos="todos"/>
  </div>
</template>

<script>
    import TodoList from '../components/TodoList.vue'
    import * as moment from 'moment';

    export default {
        name: 'monthly',

        methods: {

        },

        computed: {
            todos() {
                const currentDate = this.$store.state.currentDate;
                return this.$store.state.todos.filter(t => t.date === currentDate);
            },

            currentDate() {
                return moment(this.$store.state.currentDate).format("dddd, MMMM Do, YYYY");
            }
        },

        components: {
            TodoList
        }
    }
</script>
