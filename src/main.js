import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import calendar from './calendar';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  calendar,
  render: h => h(App)
}).$mount('#app')
