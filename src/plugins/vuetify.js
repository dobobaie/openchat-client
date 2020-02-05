import '@mdi/font/css/materialdesignicons.min.css';

import Vue from 'vue';
import Vuetify, { VTextField } from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  components: {
    VTextField
  }
});
