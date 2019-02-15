<template>
    <v-list-tile @click="completeTodo">
        <v-list-tile-action>
            <v-checkbox v-model="todo.done"></v-checkbox>
        </v-list-tile-action>

        <v-list-tile-content @click="completeTodo">
            <v-list-tile-title>{{todo.title}}</v-list-tile-title>
            <v-list-tile-sub-title>{{todo.date}}</v-list-tile-sub-title>
        </v-list-tile-content>
    </v-list-tile>

    <!--<li>-->
        <!--{{todo.title}} {{todo.done}}<br>-->
        <!--{{todo.date}}-->
        <!--<button v-on:click="showForm">edit?</button>-->
        <!--<div v-show="isEditing">EDITING:-->
            <!--<label for="title">new title:</label>-->
            <!--<input id="title" type="text" v-model="todo.title">-->
            <!--<button v-on:click="saveToDo">Save</button>-->
            <!--<button v-on:click="hideForm">cancel</button>-->
        <!--</div>-->

        <!--<span v-on:click="deleteTodo(todo)">X</span>-->
        <!--<span v-on:click="completeTodo(todo)">done</span>-->
    <!--</li>-->
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