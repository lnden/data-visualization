import Vue from 'vue';
import { init, bind } from '@/utils/custom-life-cycle';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css';
import '@/plugins';
import '@/icons';

Vue.config.productionTip = false;
init();

const vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

bind(vm);
