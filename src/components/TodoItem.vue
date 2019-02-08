<template>
    <li>
        {{todo.title}} {{todo.done}}
        <button v-on:click="showForm">edit?</button>
        <div v-show="isEditing">EDITING:
            <label for="title">new title:</label>
            <input id="title" type="text" v-model="todo.title">
            <button v-on:click="saveToDo">Save</button>
            <button v-on:click="hideForm">cancel</button>
        </div>

        <span v-on:click="deleteTodo(todo)">X</span>
        <span v-on:click="completeTodo(todo)">done</span>
    </li>
</template>

<script type="text/javascript">
    export default {
        props: ['todo'],

        data() {
            return {
                isEditing: false
            }
        },

        methods: {
            showForm() {
                this.isEditing = true
            },

            hideForm() {
                this.isEditing = false
            },

            deleteTodo(todo) {
                this.$emit('delete-todo', todo);
            },

            completeTodo(todo) {
                this.$emit('complete-todo', todo);
            },

            saveToDo() {
                const { todo } = this;
                this.$emit('save-todo', todo, todo.title);
            }
        }
    };
</script>