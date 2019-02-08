<template>
    <div>
        <ul>
            <TodoItem
                    v-for="(todo, index) in todos"
                    v-bind:todo="todo"
                    v-bind:index="index"
                    v-on:delete-todo="deleteTodo"
                    v-on:complete-todo="completeTodo"/>
        </ul>
    </div>
</template>

<script type = "text/javascript" >
import TodoItem from './TodoItem';

    export default {
        name: 'todolist',
        props: ['todos'],

        methods: {
            deleteTodo(todo) {
                const todoIndex = this.todos.indexOf(todo);
                this.todos.splice(todoIndex, 1);
            },

            completeTodo(todo) {
                const todoIndex = this.todos.indexOf(todo);
                this.todos[todoIndex].done = true;
            }
        },

        components: {
            TodoItem
        }
    };
</script>
<style>
</style>