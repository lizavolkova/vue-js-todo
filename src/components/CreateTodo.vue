<template>
    <div>
        <div v-on:click="openForm">PLUS</div>
        <div v-show="isCreating">
            <div>Create New To Do</div>
            <div class='field'>
                <label>Title</label>
                <input v-model="titleText" type='text' ref='title' defaultValue="">
            </div>

            <button v-on:click="addTodo()">Add</button>
            <button v-on:click="closeForm">Cancel</button>
        </div>

    </div>

</template>

<script>
    export default {
        name: 'createtodo',
        data() {
            return {
                titleText: '',
                isCreating: false
            }
        },

        methods: {
            openForm() {
                this.isCreating = true
            },

            closeForm() {
                this.isCreating = false;
            },

            addTodo() {
                const title = this.titleText;

                this.$emit('add-todo', {
                    title,
                    done: false
                })
            }
        }
    }
</script>