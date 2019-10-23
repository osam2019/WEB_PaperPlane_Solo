import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';

import VCalendar from 'v-calendar';
// import 'v-calendar/lib/v-calendar.min.css'

import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VCalendar);
Vue.use(VCalendar, {
  componentPrefix: 'vc',
});

Vue.use(ElementUI, { locale })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


