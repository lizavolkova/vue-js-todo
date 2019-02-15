<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>TTD</span>

        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <div id="app">

        <div id="nav">
          <router-link to="/">
            <v-btn round color="primary" dark>Monthly</v-btn>
          </router-link> |
          <router-link to="/daily">
            <v-btn round color="primary" dark>Daily</v-btn>
          </router-link>
        </div>
        <router-view/>
        <CreateTodo />
      </div>
    </v-content>
  </v-app>
</template>

<script>
    //import Header from './components/Header.vue'
    import CreateTodo from './components/CreateTodo.vue'

    export default {
        name: 'app',
        components: {
            //Header,
            CreateTodo
        }
    }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: pink;
    }
  }
}
</style>
