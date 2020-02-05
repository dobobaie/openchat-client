import Vue from 'vue';

// Import Vues
import App from '@/App.vue';

// Import Router
import Router from '@/router';

// Import Vue libs
import VueRouter from 'vue-router';
import VueJwtDecode from 'vue-jwt-decode';
import VueCookies from 'vue-cookies';

// Import plugins
import Vuetify from '@/plugins/vuetify';
import FireflyioClient from '@/plugins/fireflyio-client';

// Other imports
import LocalModels from '@/models';
import LocalServices from '@/services';

// Config
Vue.config.productionTip = false;

// Init Vue libs
Vue.use(VueRouter);
Vue.use(VueJwtDecode);
Vue.use(VueCookies);

// plugins
Vue.use(FireflyioClient);

// Other init
Vue.use(LocalModels);
Vue.use(LocalServices, { Router });

// Vue rendering
new Vue({
  router: Router,
  vuetify: Vuetify,
  render: h => h(App)
}).$mount('#app');
