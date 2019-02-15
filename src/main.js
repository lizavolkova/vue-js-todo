import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VCalendar from 'v-calendar';
import 'v-calendar/lib/v-calendar.min.css';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loaders

Vue.use(Vuetify)

// Use v-calendar, v-date-picker & v-popover components
Vue.use(VCalendar, {
    firstDayOfWeek: 2,  // Monday
    componentPrefix: 'vc'
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
