import FireflyioClient from 'fireflyio-client';

export default {
  install(Vue) {
    Vue.prototype.$fireflyio = new FireflyioClient(process.env.VUE_APP_OPENCHAT_API);
  }
};
