<template>
    <div class="bottom-nav">

            <v-dialog
                    v-model="dialog"
                    width="500"
            >
                <v-btn slot="activator" fab dark color="indigo" @click="openForm">
                    <v-icon dark>add</v-icon>
                </v-btn>




                <v-card>
                    <v-card-title
                            class="headline grey lighten-2"
                            primary-title
                    >
                        Create New To Do Item
                    </v-card-title>

                    <v-card-text>
                        <div >
                            <v-text-field
                                    v-model="titleText"
                                    label="Title"
                                    data-vv-name="titleText"
                            ></v-text-field>
                            <v-menu
                                    v-model="menu"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    lazy
                                    transition="scale-transition"
                                    offset-y
                                    full-width
                                    min-width="290px"
                            >
                                <v-text-field
                                        slot="activator"
                                        v-model="date"
                                        label="Picker without buttons"
                                        prepend-icon="event"
                                        readonly
                                ></v-text-field>
                                <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
                            </v-menu>

                        </div>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                                color="primary"
                                flat
                                @click="dialog = false"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                                color="primary"
                                flat
                                v-on:click="addTodo()"
                        >
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
    </div>

</template>

<script>
    export default {
        name: 'createtodo',
        data() {
            return {
                titleText: '',
                date: new Date().toISOString().substr(0, 10),
                dialog: false,
                showDatePicker: false,
                menu: false
            }
        },

        methods: {
            openForm() {
                this.isCreating = true;
                this.resetForm();
            },

            resetForm() {
                this.titleText = '';
                this.date = new Date().toISOString().substr(0, 10);
            },

            addTodo() {
                console.log('add todo')
                this.dialog = false;
                const title = this.titleText;
                const todoToAdd = {
                    title,
                    done: false
                }
                this.$store.dispatch('addTodo', todoToAdd);
            }
        }
    }
</script>

<style lang="scss">
    .bottom-nav {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;

    }
</style>