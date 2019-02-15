<template>
    <div>
        <v-list
                subheader
                two-line
        >
            <TodoItem
                    v-for="(todo, index) in todos"
                    v-bind:key="index"
                    v-bind:todo="todo"
                    v-bind:index="index"
                    v-on:delete-todo="deleteTodo"
                    v-on:complete-todo="completeTodo"
                    v-on:save-todo="saveTodo" />
        </v-list>
    </div>
</template>

<script type = "text/javascript" >
import TodoItem from './TodoItem';

    export default {
        name: 'todolist',
        props: ['todos'],

        methods: {
            deleteTodo(todo) {
                this.$store.dispatch('deleteTodo', todo);
            },

            completeTodo(todo) {
                this.$store.dispatch('toggleTodo', todo);
            },

            saveTodo(todo, value) {
                console.log(todo, value)

            }
        },

        components: {
            TodoItem
        }
    };
</script>
<style>
</style>