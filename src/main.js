import Vue from 'vue';

// Import Vues
import App from '@/App.vue';

// Import Router
import Router from '@/router';

// Import Vue libs
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueJwtDecode from 'vue-jwt-decode';
import VueCookies from 'vue-cookies';

// Import plugins
import vuetify from '@/plugins/vuetify';

// Other imports
import LocalModels from '@/models';
import LocalServices from '@/services';

// Config
Vue.config.productionTip = false;

// Init Vue libs
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VueJwtDecode);
Vue.use(VueCookies);

// Other init
Vue.use(LocalModels);
Vue.use(LocalServices, { Router });

// Vue rendering
new Vue({
  router: Router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
